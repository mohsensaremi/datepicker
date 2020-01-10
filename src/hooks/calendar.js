import {useDatePickerContext} from "./index";
import {useState, useMemo} from "react";

export const useCalendar = (props) => {

    const {
        initialDate,
        value,
        months,
    } = props;

    const {adapter} = useDatePickerContext();
    const [date, setDate] = useState(adapter.date(value || initialDate));

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
        onClickNextMonth,
        onClickPrevMonth,
        date,
        monthData,
    };
};
