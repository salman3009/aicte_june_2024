import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
    
  const[getData,setData]=useState(3);

  const addition=()=>{
         setData(getData+1);
  }

 

  return (
   <div>
      <h1 style={{textAlign:'center'}}>state-{getData}</h1>
      <button onClick={addition}>Add</button> 
   </div>
  );
}

export default App;
