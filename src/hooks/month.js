import {useDatePickerContext} from "./index";

export const useMonth = (props) => {

    const {
        date,
    } = props;

    const {adapter} = useDatePickerContext();
    const weekArray = adapter.getWeekArray(date).map(weeks => weeks.map(day => adapter.setHours(day, 5)));
    const weekDays = adapter.getWeekdays();
    const dayIsDisabled = day => adapter.getMonth(day) !== adapter.getMonth(date);

    return {
        weekArray,
        dayIsDisabled,
        weekDays,
    }
};
