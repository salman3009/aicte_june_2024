import './Product.css';

const Product=(props)=>{

    return (<div className='box'>
        <h1 className='align-text'>{props.name}</h1>
        <img src={require(`${props.image}`)}/>
        <h2 className='align-text'>{props.price}</h2>
    </div>)

}
export default Product;