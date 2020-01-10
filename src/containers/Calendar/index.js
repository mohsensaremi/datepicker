import Calendar from '../../components/Calendar';
import {withHooks} from '../../utils/withHooks';
import {useCalendar} from "../../hooks/calendar";

export default withHooks(useCalendar)(Calendar);
