import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getError, setError] = useState('');

  const onChangeHandler = (event) => {
    if (event.target.name == "emailDetails") {
      setEmail(event.target.value);
    }
    if (event.target.name == "passwordDetails") {
      setPassword(event.target.value);
    }

  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError('');
    if (!getEmail) {
      setError("email cannot be empty");
      return;
    }
    if (!getPassword) {
      setError("password cannot be empty");
      return;
    }
    if(!(/^[a-zA-Z0-9]{3,15}$/.test(getPassword))){
      setError('validation for password regex failed');
      return;
    }
    
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {getError && <div class="alert alert-danger" style={{textAlign:'center'}} role="alert">
            {getError}
          </div>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="emailDetails">Email address</label>
              <input type="text" className="form-control" id="emailDetails" name="emailDetails" onChange={onChangeHandler} />
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

export default App;
