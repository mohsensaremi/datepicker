import {useDatePickerContext} from "./index";
import {useState, useMemo} from "react";

export const useCalendar = (props) => {

    const {
        initialDate,
        value,
        months,
        maxDate,
        disablePast,
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

    return {
        onClickNextMonth: onClickNextMonth,
        onClickPrevMonth,
        date,
        monthData,
        showNextMonth,
        showPrevMonth,
    };
};
