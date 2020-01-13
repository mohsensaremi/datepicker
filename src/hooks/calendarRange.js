import {useCalendar} from "./calendar";
import {useState, useEffect} from 'react';

export const useCalendarRange = (props) => {

    const {
        value,
        onChange,
    } = props;

    const calendarHooks = useCalendar(props);
    const [localValue, localOnChange] = useState(value);
    const [hoverDate, setHoverDate] = useState(null);

    useEffect(() => {
        if (localValue.length === 2) {
            onChange(localValue);
        }
    }, [value, onChange, localValue, localOnChange]);

    const onMouseEnterDay = (date) => {
        if (localValue.length === 1) {
            setHoverDate(date);
        }
    };


    return {
        ...calendarHooks,
        onMouseEnterDay,
        hoverDate,
        localValue,
        localOnChange,
        value: localValue,
        onChange: localOnChange,
    };
};
