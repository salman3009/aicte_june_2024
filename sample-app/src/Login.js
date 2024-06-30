
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {

   const [getEmail,setEmail] = useState('');
   const [getPassword,setPassword] = useState('');
   const navigate = useNavigate();

   const onChangeHandler=(event)=>{
    if(event.target.name == "emailDetails"){
      setEmail(event.target.value);
    }
    if(event.target.name == "passwordDetails"){
      setPassword(event.target.value);
    }
   
   }

   const onSubmitHandler=(event)=>{
    event.preventDefault();
    console.log(getEmail,getPassword);
    alert("success");
    navigate('/dashboard');
   }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="emailDetails">Email address</label>
              <input type="email" className="form-control" id="emailDetails" name="emailDetails" onChange={onChangeHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="passwordDetails">Password</label>
              <input type="password" className="form-control" id="passwordDetails" name="passwordDetails" onChange={onChangeHandler} />
            </div>
            <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-4">
           
        </div>
      </div>

    </div>
  )
}

export default Login;
