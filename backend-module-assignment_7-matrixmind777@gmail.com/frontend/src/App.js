import { ToastContainer } from "react-toastify";
import "./App.css"
import Register from "./pages/Register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AddProduct from "./pages/admin/addProduct";
import Products from "./pages/products";
// import PrivateRoute from "./components/PrivateRoute";
// import AuthService from "./components/AuthService";
import ProductDetails from "./pages/ProductDetails";
import AllProductList from "./pages/admin/AllProductList";
import EditProduct from "./pages/admin/EditProduct";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid mt-5 pt-4">
        <ToastContainer style={{
          marginTop: 60
        }} />
        <Routes >
          <Route path='/' element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/admin_allproductslist' element={<AllProductList />} />
          <Route path='/details/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
