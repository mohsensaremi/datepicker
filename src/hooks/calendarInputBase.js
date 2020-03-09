import {useDatePickerContext} from "./index";
import {useEffect, useState} from "react";
import {bindPopover, bindTrigger, usePopupState} from "material-ui-popup-state/hooks";

export const calendarInputBase = (props) => {

    const {
        format,
        readOnly,
        closeAfterChoose,
        triggerGetter,
    } = props;


    const {adapter} = useDatePickerContext();

    const value = typeof props.value === "string"
        ? adapter.date(props.value)
        : props.value;

    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'datepicker-calendar-range-input',
    });
    const popoverProps = bindPopover(popupState);
    const popoverTrigger = bindTrigger(popupState);

    useEffect(() => {
        if (typeof triggerGetter === "function") {
            triggerGetter(popoverTrigger);
        }
    }, []);

    const text = (readOnly || !popoverProps.open)
        ? value && adapter.isValid(value) && value.format(format || adapter.formats.fullDate)
        : "";

    const onChange = (value) => {
        props.onChange(value);
        if (closeAfterChoose !== false) {
            popoverProps.onClose();
        }
    };

    return {
        text: text || "",
        popoverProps,
        popoverTrigger,
        onChange,
    }
};
