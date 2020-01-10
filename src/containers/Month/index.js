import Month from '../../components/Month';
import {withHooks} from '../../utils/withHooks';
import {useMonth} from "../../hooks/month";

export default withHooks(useMonth)(Month);
