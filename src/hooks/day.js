import {useDatePickerContext} from "./index";

export const useDay = (props) => {

    const {
        date,
        value,
        onChange,
    } = props;

    const {adapter} = useDatePickerContext();
    const today = adapter.date();
    const isToday = adapter.isEqual(date, today);
    const isActive = adapter.isValid(value) && adapter.isEqual(date, value);
    const isPast = adapter.isBefore(date, adapter.addDays(today, -1));
    const onClick = () => onChange(date);
    const text = adapter.format(date, 'dayOfMonth');

    return {
        isToday,
        isActive,
        isPast,
        onClick,
        text,
    };
};
