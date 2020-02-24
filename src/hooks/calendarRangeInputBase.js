import {useDatePickerContext} from "./index";
import {useState} from "react";

export const useCalendarRangeInputBase = (props) => {

    const {
        value,
        format,
    } = props;

    const [localValue, localOnChange] = useState(value);

    const {adapter} = useDatePickerContext();
    const text1 = localValue[0] && adapter.isValid(localValue[0]) && localValue[0].format(format || adapter.formats.fullDate);
    const text2 = localValue[1] && adapter.isValid(localValue[1]) && localValue[1].format(format || adapter.formats.fullDate);

    return {
        localValue,
        localOnChange,
        text1: text1 || "",
        text2: text2 || "",
    }
};
