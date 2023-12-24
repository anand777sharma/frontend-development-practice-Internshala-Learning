import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary ">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" href="#">SALSE APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active text-light " aria-current="page" to="/addsales">ADD SALSE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light "  to="/top5sales">TOP 5 SALES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/todaytotalrevenue">TODAYS TOTAL REVENUE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/register">REGISTER</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">LOGOUT</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar