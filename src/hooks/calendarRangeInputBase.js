import {useDatePickerContext} from "./index";

export const useCalendarRangeInputBase = (props) => {

    const {
        value,
        format,
    } = props;


    const {adapter} = useDatePickerContext();
    const text1 = value[0] && adapter.isValid(value[0]) && value[0].format(format || adapter.formats.fullDate);
    const text2 = value[1] && adapter.isValid(value[1]) && value[1].format(format || adapter.formats.fullDate);

    return {
        text1: text1 || "",
        text2: text2 || "",
    }
};
