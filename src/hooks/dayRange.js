import {useDatePickerContext} from "./index";
import {useDay} from "./day";
import {useState} from 'react';

export const useDayRange = (props) => {

    const {
        date,
        value,
        onChange,
        hoverDate,
        onMouseEnter,
        isRangeValid,
        readOnly,
        onReset,
    } = props;

    const {adapter} = useDatePickerContext();
    const dayHooks = useDay(props);

    const onClick = (date) => {
        if (readOnly) {
            return;
        }
        if (value.length === 0 || value.length === 2) {
            onChange([date]);
        } else {
            const isRangeValidResult = !(typeof isRangeValid === 'function' && !isRangeValid(value[0], date));
            if (isRangeValidResult && adapter.isAfter(date, value[0])) {
                onChange([
                    value[0],
                    date,
                ]);
            } else {
                typeof onReset === "function" ? onReset() : onChange([]);
            }
            onMouseEnter(null);
        }
    };

    const isActive = (
        date &&
        adapter.isValid(date) &&
        value[0] &&
        adapter.isValid(value[0]) &&
        adapter.isEqual(date, value[0])
    ) || (
        date &&
        adapter.isValid(date) &&
        value[1] &&
        adapter.isValid(value[1]) &&
        adapter.isEqual(date, value[1])
    ) || (
        date &&
        adapter.isValid(date) &&
        value[0] &&
        adapter.isValid(value[0]) &&
        value[1] &&
        adapter.isValid(value[1]) &&
        adapter.isBefore(value[0], date) &&
        adapter.isAfter(value[1], date)

    );

    const isHover = (
        date &&
        adapter.isValid(date) &&
        hoverDate &&
        adapter.isValid(hoverDate) &&
        value[0] &&
        adapter.isValid(value[0]) &&
        (
            !value[1] ||
            !adapter.isValid(value[1])
        ) &&
        adapter.isBefore(value[0], date) &&
        adapter.isAfter(adapter.addDays(hoverDate, 1), date)
    );


    return {
        ...dayHooks,
        onClick,
        isActive,
        isHover,
    };
};
