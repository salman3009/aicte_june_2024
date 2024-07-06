import {Component} from 'react';
import Product from './Product';

class App extends Component{

     constructor(props){
        super(props);
        this.state={
          balance:0,
          expense:0,
          list:[
            {
            names:"lg",
            price:3000
          },
          {
            names:"lg",
            price:5000
          },
          {
            names:"lg",
            price:6000
          }
        ]
        }
     }

     onChangeHandler=(event)=>{
        this.setState({expense:Number(event.target.value)})
     }

      onSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
     
      }

    render(){
       return (<div>
        <h1>App component</h1>
        {
          this.state.list.map((obj,index)=>{
             return (<Product key={index} names={obj.names} price={obj.price}/>)
          })
        }
        
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" name="expense" onChange={this.onChangeHandler}/>
          <input type="submit"/>
        </form>
       </div>)
    }
}

export default App;