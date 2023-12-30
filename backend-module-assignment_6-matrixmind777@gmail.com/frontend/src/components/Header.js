import React from 'react'

const Header = () => {
  return (
    <div>
      {/* <!-- nav bar first part --> */}
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand ms-3 d-flex" href="../index.html">
              {/* <!-- site logo --> */}
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/shopping-cart-icon-19.png" alt="Logo" 
                    height="50" className="d-inline-block align-text-top mt-2"/>
               <div className="text-white">
                {/* <!-- brand name --> */}
                <h3 className="ms-2 mt-1">
                  zemo Store
                </h3>
                <h6 className="ms-2 " style={{marginTop: "-11px"}}>
                  {/* <!-- sub brand title --> */}
                  aapka <span style={{color:"#ff802c"}}>Apna</span> Baazar
                </h6>
               </div>
                 
            </a>
            {/* <!-- this is a togggle button used when the site used on small scree --> */}
            <button
             className="navbar-toggler"
             type="button"
              data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse" id="navbarSupportedContent">
              {/* <!-- search field --> */}
                <form className="d-flex col-lg-6 me-auto ms-auto" role="search">
                    <input className="form-control rounded-start" style={{borderRadius:"8px 0 0 8px"}} type="search" placeholder="Search" aria-label="Search"/>
                    <button className=" text-white btn " style={{background: "#ff802c", borderRadius: "0 8px 8px 0"}} type="submit">Search</button>
                </form>
                <div className="ms-auto">
                  {/* <!-- ms auto is used to place login button right side of page --> */}
                    <ul className="navbar-nav">
                      {/* <!-- unordered list is used --> */}
                        <li className="nav-item">
                          {/* <!-- login button  --> */}
                            <a className="btn text-white ps-4 pe-4 mt-2 me-3" style={{background: "#ff802c"}} href="../login.html">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                          {/* <!-- cart button --> */}
                            <a href="../cart.html" className="nav-link text-white me-2 mt-2">
                                <i className="fa-solid fa-cart-shopping fa-lg "></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
{/* <!-- navbar second part --> */}
<ul className="nav justify-content-center bg-primary">
  {/* <!-- unordered list is used for making the navigation --> */}
    <li className="nav-item">
      {/* <!-- home page --> */}
      <a className="fs-5 nav-link active" style={{color: "#ff802c"}} aria-current="page" href=".././index.html">Home</a>
    </li>
    <li className="nav-item">
      {/* <!-- all product page --> */}
      <a className="fs-5 text-white nav-link" href="../all_product.html">All Product</a>
    </li>
    <li className="nav-item dropdown">
      {/* <!-- dropdown for the women catogry --> */}
        <button className="fs-5 text-white nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
          Women
        </button>
        <ul className="dropdown-menu"> 
          {/* <!-- option 1 --> */}
          <li><a className="fs-5 dropdown-item" href="../women_all_product.html">All Products</a></li>
          {/* <!-- option 2 --> */}
          <li><a className="fs-5 dropdown-item" href="../dersses.html">Dresses</a></li>
          {/* <!-- option 3 --> */}
          <li><a className="fs-5 dropdown-item" href="../pants.html">Pants</a></li>
          {/* <!-- option 4 --> */}
          <li><a className="fs-5 dropdown-item" href="../skirt.html">Skirts</a></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
         {/* <!-- dropdown for the men catogry --> */}
        <button className="fs-5 text-white nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
          Men
        </button>
        <ul className="dropdown-menu">
          {/* <!-- option 1 --> */}
          <li><a className="fs-5 dropdown-item" href="../men_all_product.html">All Products</a></li>
              {/* <!-- option 2 --> */}
          <li><a className="fs-5 dropdown-item" href="../hoodie.html">Hoodies</a></li>
              {/* <!-- option 3 --> */}
          <li><a className="fs-5 dropdown-item" href="../pant.html">Pants</a></li>
              {/* <!-- option 4 --> */}
          <li><a className="fs-5 dropdown-item" href="../shirt.html">Shirts</a></li>
        </ul>
      </li>
    <li className="nav-item">
      {/* <!-- kids page --> */}
      <a className="fs-5 nav-link text-white" href="../kids.html">Kids</a>
    </li>
    <li className="nav-item">
      {/* <!-- contact us page --> */}
      <a className="fs-5 nav-link text-white" href="../contactUs.html">Contact</a>
    </li>
   
  </ul>
    </div>
  )
}

export default Header