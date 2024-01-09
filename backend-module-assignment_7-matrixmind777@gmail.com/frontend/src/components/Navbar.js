import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cart';
import { Badge } from "antd";
import { useAuth } from '../context/auth';

const Navbar = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart()
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        });
        localStorage.removeItem("auth");
    }
    return (
        <div><nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="navbar-brand" to="/">Home</Link>
                            </li>
                           
                        </ul>
                    </div>

                    <form className="d-flex mx-auto w-50" role="search">
                        <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>

                    {
                        !auth.user ? (<>  <Link className="btn rounded-5 shadow btn-warning m-1" to="/login">
                            Login
                        </Link></>) : (<>
                            <Link className="btn rounded-5 shadow btn-warning m-1" to="/profile">
                                Profile
                            </Link>
                            <Link className="btn rounded-5 shadow btn-warning m-1" onClick={handleLogout}
                                to="/login">
                                logout
                            </Link>
                        </>)
                    }



                    <Badge count={cart?.length} showZero size="default">
                        <Link className="btn rounded-3 shadow btn-secondary m-1" to="/cart">
                            cart
                        </Link>
                    </Badge>


                </div>
            </div>
        </nav></div>
    )
}

export default Navbar