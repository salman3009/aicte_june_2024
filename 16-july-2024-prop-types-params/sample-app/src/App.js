import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Header from './Header';
import Product from './Product';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Product name={121} age={"true"}/>
       <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/dashboard/:id/:stage" element={<Dashboard/>}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
