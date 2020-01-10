import {useCalendar} from "./calendar";
import {useState} from 'react';

export const useCalendarRange = (props) => {

    const calendarHooks = useCalendar(props);
    const [hoverDate, setHoverDate] = useState(null);

    const onMouseEnterDay = (date) => setHoverDate(date);
    const onMouseOutDay = () => setHoverDate(null);


    return {
        ...calendarHooks,
        onMouseEnterDay,
        onMouseOutDay,
        hoverDate,
    };
};
