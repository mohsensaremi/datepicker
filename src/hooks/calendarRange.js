import {useCalendar} from "./calendar";
import {useState, useEffect} from 'react';

export const useCalendarRange = (props) => {

    const {
        value,
        onChange,
        localValue: localValueProps,
        localOnChange: localOnChangeProps,
        mode,
    } = props;

    const calendarHooks = useCalendar(props);
    const [localLocalValue, localLocalOnChange] = useState(value);
    const [hoverDate, setHoverDate] = useState(null);

    const localValue = localValueProps || localLocalValue,
        localOnChange = localOnChangeProps || localLocalOnChange;

    useEffect(() => {
        switch (mode) {
            case "single":
                if (localValue.length === 1) {
                    onChange(localValue);
                }
                break;
            case "range":
                if (localValue.length === 2) {
                    onChange(localValue);
                }
                break;
        }
    }, [onChange, localValue, mode]);

    useEffect(() => {
        switch (mode) {
            case "single":
                if (value.length === 1) {
                    localOnChange(value);
                }
                break;
            case "range":
                if (value.length === 2 || value.length === 0) {
                    localOnChange(value);
                }
                break;
        }
    }, [localOnChange, value, mode]);

    const onReset = () => localOnChange(value);

    const onMouseEnterDay = (date) => {
        if(mode==="range"){
            if (localValue.length === 1) {
                setHoverDate(date);
            }
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
