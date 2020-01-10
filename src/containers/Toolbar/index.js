import Toolbar from '../../components/Toolbar';
import {withHooks} from '../../utils/withHooks';
import {useToolbar} from "../../hooks/toolbar";

export default withHooks(useToolbar)(Toolbar);
