import {useCalendar} from "./calendar";
import {useState} from 'react';

export const useCalendarRange = (props) => {

    const {
        value,
    } = props;

    const calendarHooks = useCalendar(props);
    const [hoverDate, setHoverDate] = useState(null);

    const onMouseEnterDay = (date) => {
        if (value.length === 1) {
            setHoverDate(date);
        }
    };


    return {
        ...calendarHooks,
        onMouseEnterDay,
        hoverDate,
    };
};
