import {useContext} from "react";
import {DatePickerContext} from "../context";

export const useDatePickerContext = () => {
    return useContext(DatePickerContext);
};
