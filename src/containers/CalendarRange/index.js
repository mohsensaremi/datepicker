import Calendar from '../../components/Calendar';
import {withHooks} from '../../utils/withHooks';
import {useCalendarRange} from "../../hooks/calendarRange";

export default withHooks(useCalendarRange)(Calendar);
