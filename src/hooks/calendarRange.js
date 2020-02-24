import {useCalendar} from "./calendar";
import {useState, useEffect} from 'react';

export const useCalendarRange = (props) => {

    const {
        value,
        onChange,
        localValue: localValueProps,
        localOnChange: localOnChangeProps,
    } = props;

    const calendarHooks = useCalendar(props);
    const [localLocalValue, localLocalOnChange] = useState(value);
    const [hoverDate, setHoverDate] = useState(null);

    const localValue = localValueProps || localLocalValue,
        localOnChange = localOnChangeProps || localLocalOnChange;

    useEffect(() => {
        if (localValue.length === 2) {
            onChange(localValue);
        }
    }, [value, onChange, localValue, localOnChange]);

    const onReset = () => localOnChange(value);

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
        onReset,
    };
};
