
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {fetchDataSuccess} from './actions';

function App() {
   const obj = useSelector((state)=>state.data);
   console.log(obj);

   const dispatch = useDispatch();

   const onAddData=()=>{
    dispatch(fetchDataSuccess("akash"));
   }

  return (
    <div className="App">
       <button onClick={onAddData}>Click here</button>
    </div>
  );
}

export default App;
