
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {fetchDataRequest} from './actions';
import { useEffect } from 'react';

function App() {
   const obj = useSelector((state)=>state.data);
   console.log(obj);

   const dispatch = useDispatch();

   const onAddData=()=>{
    dispatch(fetchDataRequest());
   }



  return (
    <div className="App">
       <button onClick={onAddData}>Click here</button>
    </div>
  );
}

export default App;
