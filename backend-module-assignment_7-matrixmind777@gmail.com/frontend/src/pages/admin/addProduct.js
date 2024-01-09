import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function AddProduct() {
    const [product, setProduct] = useState({ name: '', description: '', discount: '', category: '', quantity: 10, price: 340 });

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('discount', product.discount);
        formData.append('category', product.category);
        formData.append('quantity', product.quantity);
        formData.append('price', product.price);
        formData.append('picture', product.picture);

        try {
            await axios.post('http://localhost:5000/api/product/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            toast.success('Product Added');
        } catch (error) {
            console.log(error);
             toast.error(error.response.data.message);
           
        }
    }

    return (<div className='container text-center'>
        <div className="mb-3 text-center display-6 fw-bold">
            Add Products
        </div>
        <form onSubmit={submitHandler}>

            <input type='file' className='form-control mt-3'
                onChange={(e) => { setProduct({ ...product, picture: e.target.files[0] }) }} />

            <input type='text' className='form-control mt-3' placeholder='Name of the Product'
                value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />

            <input type='text' className='form-control mt-3' placeholder='description of the Product'
                value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />

            <input type='text' className='form-control mt-3' placeholder='discount of the Product'
                value={product.discount} onChange={(e) => setProduct({ ...product, discount: e.target.value })} />

            <input type='text' className='form-control mt-3' placeholder='category of the Product'
                value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} />

            <input type='text' className='form-control mt-3' placeholder='quantity of the Product'
                value={product.quantity} onChange={(e) => setProduct({ ...product, quantity: e.target.value })} />

            <input type='number' className='form-control mt-3' placeholder='Price of the Product'
                value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />

            <button className='btn btn-primary mt-3 ' type='submit'>Save Product</button>
        </form>
    </div>);
}

export default AddProduct;