import React,{useState ,useEffect} from 'react';
import './product.css';
import { Link } from 'react-router-dom';

const ProductsShow= () =>{
    const [products, setProductsHome] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        (async ()=>{
            await getProducts();
        })();
        getProducts();
    },[])
    const getProducts= async()=>{
        try{
            setLoading(true)
            const response = await fetch ('https://dummyjson.com/products')
        const result =await response.json();
        setProductsHome(result.products);
        setLoading(false)
        }
        catch(error){
            console.log(error.message);
        }
    };
    console.log({products});
    if(loading){
        return <h1>Loading...</h1>
    }
    return(
        <div className='productsStart'>
            {products.map(item =>(
                <div key={item.id}>
                    <img alt='' src={item.images[1]}/>
                    <h3>{item.title}</h3>
                    <p> Ksh {item.price}</p>
                    <p>{item.discountPercentage}%</p>
                   <Link to={`/Products/${item.id}`}>
                      <button className='react'>Details</button>    <button>add</button>
                     </Link>
                    </div>
            ))}

        </div>
    );
}
export default ProductsShow;