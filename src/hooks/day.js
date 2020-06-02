import {useDatePickerContext} from "./index";

export const useDay = (props) => {

    const {
        date,
        value,
        onChange,
        readOnly,
    } = props;

    const {adapter} = useDatePickerContext();
    const today = adapter.startOfDay(adapter.date());
    const isToday = adapter.isEqual(date, today);
    const isActive = adapter.isValid(value) && adapter.isEqual(date, value);
    const isPast = adapter.isBefore(date, today);
    const onClick = () => readOnly ? null : onChange(date);
    const text = adapter.format(date, 'dayOfMonth');

    return {
        isToday,
        isActive,
        isPast,
        onClick,
        text,
    };
};
