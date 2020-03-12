import {useDatePickerContext} from "./index";
import {useState, useMemo} from "react";

export const useCalendar = (props) => {

    const {
        initialDate,
        value,
        months,
        maxDate,
        disablePast,
        disableFuture,
        selectableYear,
    } = props;

    const {adapter} = useDatePickerContext();
    const [date, setDate] = useState(adapter.date((Array.isArray(value) ? value[0] : value) || initialDate));
    let showNextMonth = true;
    let showPrevMonth = true;
    if (maxDate) {
        showNextMonth = adapter.isBefore(date, adapter.date(maxDate));
    }
    if (disablePast) {
        showPrevMonth = adapter.isAfter(date, adapter.startOfMonth(adapter.getNextMonth(adapter.date())));
    }

    const onClickNextMonth = () => {
        setDate(adapter.getNextMonth(date));
    };
    const onClickPrevMonth = () => {
        setDate(adapter.getPreviousMonth(date));
    };
    const onChangeYear = (event) => {
        const value = event.target.value;
        setDate(adapter.setYear(date, Number(value)));
    };

    const monthData = useMemo(() => {
        const data = [{
            date,
        }];
        for (let i = 1; i < months; i++) {
            data.push({
                date: adapter.getNextMonth(data[i - 1].date),
            });
        }
        return data;
    }, [months, date, adapter]);

    const selectableYearArray = useMemo(() => {
        const years = [];
        if (selectableYear) {
            if (disablePast !== true) {
                for (let i = 0; i < 100; i++) {
                    const yearNumber = adapter.getYear(date);
                    years.push(yearNumber - i)
                }
            }
            if (disableFuture !== true) {
                for (let i = (disablePast !== true ? 1 : 0); i < 100; i++) {
                    const yearNumber = adapter.getYear(date);
                    years.unshift(yearNumber + i);
                }
            }
        }
        return years;
    }, []);

    return {
        onClickNextMonth: onClickNextMonth,
        onClickPrevMonth,
        date,
        monthData,
        showNextMonth,
        showPrevMonth,
        onChangeYear,
        selectableYearArray,
    };
};
