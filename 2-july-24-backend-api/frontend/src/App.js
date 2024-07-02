import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Header from './Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
