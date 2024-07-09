import {useSelector,useDispatch} from 'react-redux';
import {fetchDataSuccess} from './actions/index';

function Header(){

    const data = useSelector((state)=>state.data);
    const dispatch = useDispatch();

    const onUpdate=()=>{
        dispatch(fetchDataSuccess("suresh"));
    }

    return (<div>
        Header component - {data}
        <button onClick={onUpdate}>update</button>
    </div>)
}

export default Header;