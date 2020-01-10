import {useDatePickerContext} from "./index";
import {useDay} from "./day";
import {useState} from 'react';

export const useDayRange = (props) => {

    const {
        date,
        value,
        onChange,
        hoverDate,
    } = props;

    const {adapter} = useDatePickerContext();
    const dayHooks = useDay(props);

    const onClick = (date) => {
        if (value.length === 0 || value.length === 2) {
            onChange([date]);
        } else {
            if (adapter.isAfter(date, value[0])) {
                onChange([
                    value[0],
                    date,
                ]);
            } else {
                onChange([]);
            }
        }
    };

    const isActive = (
        value[0] &&
        adapter.isValid(value[0]) &&
        adapter.format(date, 'fullDate') === adapter.format(value[0], 'fullDate')
    ) || (
        value[1] &&
        adapter.isValid(value[1]) &&
        adapter.format(date, 'fullDate') === adapter.format(value[1], 'fullDate')
    ) || (
        value[0] &&
        adapter.isValid(value[0]) &&
        value[1] &&
        adapter.isValid(value[1]) &&
        adapter.isBefore(value[0], date) &&
        adapter.isAfter(value[1], date)

    );

    const isHover = (
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
