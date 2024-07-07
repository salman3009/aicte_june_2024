import { Component } from 'react';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    console.log("constructor 1");
    super(props);
    this.state = {
      names: '',
      list:[]
    }
  }

  componentDidMount() {
    console.log("component Did Mount 1");
    this.onInitialData();
  }

  onInitialData=()=>{
    axios.get('http://localhost:8080/listNames').then((result) => {
      console.log(result.data);
      this.setState({
        list:result.data
      })
    })
  }

  onChangeHandler = (event) => {
    this.setState({ names: event.target.value })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:8080/listNames',{names:this.state.names}).then((result) => {
          this.onInitialData();
    })

  }

  render() {
    console.log("render 1");
    return (<div>
      <h1>App component</h1>

      {
         this.state.list.map((items,index)=>{
          return (<div key={index}>
             <p>{items.names}</p>
          </div>)

        })
      }
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" name="names" onChange={this.onChangeHandler} />
        <input type="submit" value="add"/>
      </form>
    </div>)
  }
}

export default App;