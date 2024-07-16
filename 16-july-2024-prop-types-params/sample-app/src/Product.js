import PropTypes from 'prop-types';


function Product(props){
    return (<div>
        <h1>The name is:{props.name}</h1>
        <h1>The age  is:{props.age?'yes':'no'}</h1>
    </div>)
}

Product.propTypes={
    name:PropTypes.string,
    age:PropTypes.bool
}
export default Product;