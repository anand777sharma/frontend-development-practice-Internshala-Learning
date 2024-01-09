import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../context/cart';
function Products() {
const [cart,setCart]=useCart()
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const viewProduct = (id) => {
        navigate('/details/' + id);
    }
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/product/allproducts');
            setProducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (<div className='container-fluid '>
        <div className="row">
            <div className="col-lg-2  bg-primary">
                <h3>filter section</h3>

            </div>
            <div className="col-lg-10 offset-2">
                <div class="row g-4">

                    {
                        products.map((item) => (
                            <div className="col-lg-3">
                                <div className="card p-2 border-0 shadow-sm" >
                                    <img src={`http://localhost:5000/uploads/${item.picture.split('\\')[1]}`}
                                        alt={item.name} height={240} />
                                    <div className="card-body">
                                        <h6 className="card-title">{item.name}</h6>
                                        <p className="card-text"> ₹ {item.price}</p>
                                        <p className="card-text">{item.description.substring(0, 30)}...</p>
                                        <div className="d-flex justify-content-between">
                                            <button className='btn btn-secondary shadow m-1 ' onClick={() => viewProduct(item._id)}>know More</button>
                                            <button className='btn btn-secondary shadow m-1' 
                                            onClick={() => {setCart([...cart,item])
                                                localStorage.setItem("cart",JSON.stringify([...cart,item]))
                                                toast.success('Item Added to cart');
                                            }}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>

    </div>
    );
}
export default Products;