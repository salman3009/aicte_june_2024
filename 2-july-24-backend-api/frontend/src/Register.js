import { useState,useEffect } from "react";

function Register(){

    const [getData,setData] = useState(0);


     useEffect(()=>{
           alert("effect initial");
     },[])

    function initial(){
         alert("initial");
    }

    initial();


    function increment(){
        setData(getData+1);
    }

    return (<div>
        <h1>Register component</h1>
        <button onClick={increment}>Increment</button>
    </div>)
}

export default Register;