import React from 'react'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      })
      return total;
    } catch (error) {
      console.log(error);
    }
  }
  const removeCartItem = (productId) => {
    try {
      const mycart = [...cart];
      const index = mycart.findIndex((item) => item._id === productId)
      mycart.splice(index, 1);
      setCart(mycart);
      localStorage.setItem("cart", JSON.stringify(mycart))
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className='container'>
      <div className="text-center mb-3">
        <h2>
          {`Hello ${auth?.token && auth?.user?.name}`}
        </h2>
        <h4>
          {cart?.length > 1 ? `you Have ${cart.length} items in your cart ${auth?.token ? "" : "please Login to checkout"}` : "You cart is empaty"}
        </h4>
      </div>

      <div class="row">
        <div className="col-lg-8">
          {cart?.map(item => (
            <div className="row shadow-sm mb-3 bg-body-tertiary">
              <div className="col-lg-4 bg-white p-2"> <img src={`http://localhost:5000/uploads/${item.picture.split('\\')[1]}`}
                alt={item.name} height={140} /></div>
              <div className="col-lg-8 py-2 ps-3 ">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"> ₹ {item.price}</p>
                <p className="card-text">{item.description.substring(0, 50)}...</p>
                <button className="btn btn-danger shadow-sm m-1 btn-sm "
                  onClick={() => removeCartItem(item._id)}
                >
                  remove
                </button>
                <div className="btn-group  mx-2 my-1" role="group" aria-label="Basic mixed styles example">
                  <button type="button" className="btn btn-white border border-2 btn-sm px-3 rounded-start-5 shadow-sm">+</button>
                  <button type="button" className="btn btn-light border  btn-sm px-3" disabled>1</button>
                  <button type="button" className="btn btn-white border border-2 btn-sm px-3 rounded-end-5 shadow-sm">-</button>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="col-lg-4">
          <div className="text-center mb-3">
            <h2>
              Cart Summary
            </h2>
          </div>
          <h3 className='text-center mb-4'>Subtotal({cart.length} items): ₹{totalPrice()}/-</h3>
          <div className="d-grid gap-2">
            <button className="btn btn-warning shadow-sm rounded-5" type="button">Preceed to buy</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default CartPage