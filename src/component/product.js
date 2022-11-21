import "../style/product.css";
import axios from "axios";
import { useState, useEffect } from "react";


const Products = () => {
    const [data, setData] = useState();
    const cover = async () => {
        try {
            const result = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789913/React%20Class/Mahesh/top_collections_rmgdhz.json");
            console.log(result);
            setData(result.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        cover()
    },[])
return(
    <div className="products"> 
    {data && data.items.map(e => <p>{e.id}<p>{e.title}</p>{e.description}</p>)}
    </div>
)
}
export default Products;
