import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllProductList = () => {
    const navigate=useNavigate();
    const [products,setProducts]=useState([]);
    const editProduct=(id)=>{
       navigate('/editproduct/'+id);
    }
    const deleteProduct=(id)=>{
        axios.delete('http://localhost:5000/api/product/deleteProductById/'+id);
    }
    const fetchData=async ()=>{
        try {
            const resp= await axios.get('http://localhost:5000/api/product/allproducts');
            setProducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[deleteProduct])
    return (
    <div className='container-fluid'>

<div className="text-center text-secondary fw-bold display-5 mb-5">
    All product List
</div>



        <table className='table table-striped table-bordered text-center'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>discount</th>
                    <th>Category</th>
                    <th>quantity</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.discount}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>₹{item.price}</td>
                            <td><img src={`http://localhost:5000/uploads/${item.picture.split('\\')[1]}`} 
                            height="100"  alt={item.name}/></td>
                            <td>
                                <button className='btn btn-danger rounded-5 shadow m-1 ' onClick={()=>deleteProduct(item._id)}>delete</button>
                                <button className='btn btn-light rounded-5 shadow m-1 ' onClick={()=>editProduct(item._id)}>edit</button>
                                </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>);
}

export default AllProductList