import './App.css';
import Product from './Product';
const App = ()=>{

    const list=[
        {
            name:"mi1",
            price:2000,
            image:'./assets/mi1.png'
        },{
            name:"mi2",
            price:4000,
            image:'./assets/mi2.png' 
        },
        {
            name:"mi1",
            price:2000,
            image:'./assets/mi1.png'
        },{
            name:"mi2",
            price:4000,
            image:'./assets/mi2.png' 
        },
        {
            name:"mi1",
            price:2000,
            image:'./assets/mi1.png'
        },{
            name:"mi2",
            price:4000,
            image:'./assets/mi2.png' 
        },
        {
            name:"mi1",
            price:2000,
            image:'./assets/mi1.png'
        },{
            name:"mi2",
            price:4000,
            image:'./assets/mi2.png' 
        }
    ]
     
    return (<div style={{display:"flex",flexWrap:'wrap'}}>
            {list.map((obj)=>{
                 return(<div>
                    <Product
                     name={obj.name}
                     price={obj.price}
                     image={obj.image}
                    />
                 </div>)
            })}
    </div>)
}

export default App;