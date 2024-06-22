import './Product.css';

const Product=(props)=>{

    let object= {
        width:'400px',
        height:'400px',
        padding:"20px",
        border:"2px solid black"
    }

    return (<div style={object}>
        <h1 className='align-text'>{props.name}</h1>
        <img src={require(`${props.image}`)}/>
        <h2 className='align-text' style={props.price>=3000?{color:"red"}:{color:"blue"}} >{props.price}</h2>
        {props.price>4000 && props.name == "mi2" && <h1>Offer is available</h1>}
    </div>)

}
export default Product;