import {useDatePickerContext} from "./index";

export const useToolbar = (props) => {

    const {
        date,
    } = props;

    const {adapter} = useDatePickerContext();
    const monthName = adapter.format(date, "month");
    const yearName = adapter.format(date, "year");

    return {
        monthName,
        yearName,
    };
};
