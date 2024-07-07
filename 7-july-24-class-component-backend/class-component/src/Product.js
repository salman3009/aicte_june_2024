

import React,{Component} from 'react';

class Product extends Component{
 
    constructor(props){
       super(props);
       this.state={
         names:"akash"
       }
    }

    render(){
       return (<div>
        <h1>Product component</h1>
        <h3>{this.props.names}</h3>
        <h3>{this.props.price}</h3>
       </div>)
    }
}

export default Product;