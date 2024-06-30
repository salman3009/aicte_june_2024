import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [getForm, setForm] = useState({email:'',password:''});


  const onChangeHandler = (event) => {
    let {name,value} = event.target;
    setForm({...getForm,[name]:value});
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(getForm);
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
              <input type="text" className="form-control" id="emailDetails" name="email" onChange={onChangeHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="passwordDetails">Password</label>
              <input type="password" className="form-control" id="passwordDetails" name="password" onChange={onChangeHandler} />
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

export default App;
