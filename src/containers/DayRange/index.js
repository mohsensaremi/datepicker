import Day from '../../components/Day';
import {withHooks} from '../../utils/withHooks';
import {useDayRange} from "../../hooks/dayRange";

export default withHooks(useDayRange)(Day);
