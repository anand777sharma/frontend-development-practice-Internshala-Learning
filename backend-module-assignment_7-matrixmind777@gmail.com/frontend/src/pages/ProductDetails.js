import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/product/getProductId/' + id);
            const Pdata = resp.data;
            setProduct(Pdata);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(product);

    return (
        <div>
            <h3>Product details</h3>

            {product &&
               <div className="card" style={{width:"20rem"}} >
               <img src={`http://localhost:5000/${product.picture}`} className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">{product.name}</h5>
                 <p className="card-text">{product.description}</p>
                 <p className="card-text">₹{product.price} &nbsp; {product.discount}Off</p>
                 <a href="#" className="btn btn-primary">add to cart</a>
               </div>
             </div>
            }
        </div>
    );
}

export default ProductDetails;