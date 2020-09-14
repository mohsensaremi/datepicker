import {useDatePickerContext} from "./index";

export const useMonth = (props) => {

    const {
        date,
    } = props;

    const {adapter} = useDatePickerContext();
    const weekArray = adapter.getWeekArray(date);
    const weekDays = adapter.getWeekdays();
    const notInThisMonth = day => adapter.getMonth(day) !== adapter.getMonth(date);

    return {
        weekArray,
        notInThisMonth,
        weekDays,
    }
};
