import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  }


  return (
    <div>
      check:<button onClick={handleSubmit}>Login</button>
    </div>
      
  )
}

export default Login