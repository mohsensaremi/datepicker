import {useDatePickerContext} from "./index";

export const useMonth = (props) => {

    const {
        date,
    } = props;

    const {adapter} = useDatePickerContext();
    const weekArray = adapter.getWeekArray(date);
    const dayIsDisabled = day => adapter.getMonth(day) !== adapter.getMonth(date);

    return {
        weekArray,
        dayIsDisabled,
    }
};
