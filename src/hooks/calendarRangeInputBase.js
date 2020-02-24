import {useDatePickerContext} from "./index";
import {useEffect, useState} from "react";
import {bindPopover, bindTrigger, usePopupState} from "material-ui-popup-state/hooks";

export const useCalendarRangeInputBase = (props) => {

    const {
        value,
        format,
        readOnly,
        closeAfterChoose,
        triggerGetter,
    } = props;


    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'datepicker-calendar-range-input',
    });
    const popoverProps = bindPopover(popupState);
    const popoverTrigger = bindTrigger(popupState);

    const [localValue, localOnChange] = useState(value);

    useEffect(() => {
        if (closeAfterChoose && value.length === 2) {
            popoverProps.onClose();
        }
    }, [closeAfterChoose, value]);

    useEffect(() => {
        if (value.length === 2) {
            localOnChange(value);
        }
    }, [value]);

    useEffect(() => {
        if (typeof triggerGetter === "function") {
            triggerGetter(popoverTrigger);
        }
    }, []);

    const {adapter} = useDatePickerContext();
    const text1 = (readOnly || !popoverProps.open)
        ? value[0] && adapter.isValid(value[0]) && value[0].format(format || adapter.formats.fullDate)
        : localValue[0] && adapter.isValid(localValue[0]) && localValue[0].format(format || adapter.formats.fullDate);
    const text2 = (readOnly || !popoverProps.open)
        ? value[1] && adapter.isValid(value[1]) && value[1].format(format || adapter.formats.fullDate)
        : localValue[1] && adapter.isValid(localValue[1]) && localValue[1].format(format || adapter.formats.fullDate);

    return {
        localValue,
        localOnChange,
        text1: text1 || "",
        text2: text2 || "",
        popoverProps,
        popoverTrigger,
    }
};
