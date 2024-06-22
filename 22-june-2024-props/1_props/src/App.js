import './App.css';
import Product from './Product';
const App = ()=>{
     
    return (<div className="container">
        <Product name="mi1" price="3000" image="./assets/mi1.png"/>
        <Product name="mi2" price="5000" image="./assets/mi2.png"/>
        <Product name="mi3" price="8000" image="./assets/mi3.png"/>
        <Product name="mi4" price="9000" image="./assets/mi1.png"/>
        <Product name="mi5" price="1000" image="./assets/mi2.png"/>
        <Product name="mi1" price="3000" image="./assets/mi1.png"/>
        <Product name="mi2" price="5000" image="./assets/mi2.png"/>
        <Product name="mi3" price="8000" image="./assets/mi3.png"/>
        <Product name="mi4" price="9000" image="./assets/mi1.png"/>
    </div>)
}

export default App;