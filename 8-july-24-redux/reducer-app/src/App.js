
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {fetchDataSuccess,apiDataRequest} from './actions';
import Header from './Header';
import { useEffect } from 'react';

function App() {
   const obj = useSelector((state)=>state.data);
   console.log(obj);

   const obj2 = useSelector((state)=>state.api);
   console.log(obj2);

   const dispatch = useDispatch();

   const onAddData=()=>{
    dispatch(fetchDataSuccess("akash"));
   }

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => dispatch(apiDataRequest(json)))
   },[])

  return (
    <div className="App">
       <button onClick={onAddData}>Click here</button>
       <Header/>
    </div>
  );
}

export default App;
