import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
    
  const[getData,setData]=useState(3);

  const addition=()=>{
         setData(getData+1);
  }

  const subtraction=(n,type)=>{
      if(type=="mul"){
        setData(getData*n);
      }
      if(type == 'sub'){
        setData(getData-n);
      }
  }

 

  return (
   <div>
      <h1 style={{textAlign:'center'}}>state={getData}</h1>
      <button onClick={addition}>Add</button> 
      <br/>
      <button onClick={()=>subtraction(6,'mul')}>Sub</button>
   </div>

  );
}

export default App;
