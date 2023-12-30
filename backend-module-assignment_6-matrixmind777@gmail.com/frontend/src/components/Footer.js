import React from 'react'

const Footer = () => {
  return (
    <div>
 {/* <!-- Footer --> */}
  <footer class="text-center text-lg-start text-muted" style={{backgroundColor: "#212121"}}>
    {/* <!-- Section: Social media --> */}
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      style={{backgroundColor: "#252525"}}>
      {/* <!-- Left --> */}
      <div class="me-5 mt-2 d-none text-white d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* <!-- Left --> */}

      {/* <!-- Right --> */}
      <div className='d-flex'>
        <div class="btn-back">
          <button  class="me-4 text-white text-decoration-none rounded-circle ">
            <i class="fab fa-facebook-f"></i>
          </button>
        </div>
        <div class="btn-back">
          <button class="me-4 text-white text-decoration-none rounded-circle ">
            <i class="fab fa-twitter"></i>
          </button>
        </div>
        <div class="btn-back">
          <button  class="me-4 text-white text-decoration-none rounded-circle">
            <i class="fab fa-google"></i>
          </button>
        </div>
        <div class="btn-back">

          <button class="me-4 text-white text-decoration-none rounded-circle">
            <i class="fab fa-instagram"></i>
          </button>
        </div>
        <div class="btn-back">
          <button class="me-4 text-white text-decoration-none rounded-circle">
            <i class="fab fa-linkedin"></i>
          </button>
        </div>
       
       
      </div>
      {/* <!-- Right --> */}
    </section>
    {/* <!-- Section: Social media --> */}

    {/* <!-- Section: Links  --> */}
    <section class="">
      <div class="container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div class="row mt-3">
          {/* <!-- Grid column --> */}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-center">
            {/* <!-- Content --> */}
            <h6 class="text-uppercase text-white fw-bold mb-4" >
              Women
            </h6>
            <p>
              <a href="../dersses.html" class="text-white  text-decoration-none">DRESS</a>
            </p>
            <p>
              <a href="../pants.html" class="text-white text-decoration-none">PAINTS</a>
            </p>
            <p>
              <a href="../skirt.html" class="text-white text-decoration-none">SKIRT</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-center">
            {/* <!-- Content --> */}
            <h6 class="text-uppercase text-white fw-bold mb-4">
              Men
            </h6>
            <p>
              <a href="../shirt.html" class="text-white text-decoration-none">SHIRT</a>
            </p>
            <p>
              <a href="../pant.html" class="text-white text-decoration-none">PAINTS</a>
            </p>
            <p>
              <a href="../hoodie.html" class="text-white text-decoration-none">HOODIES</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-center">
            {/* <!-- Content --> */}
            <h6 class="text-uppercase text-white fw-bold mb-4">
              <a href="../kids.html" class="text-white text-decoration-none">KIDS</a>
            </h6>

          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-center">
            {/* <!-- Content --> */}
            <h6 class="text-uppercase text-white fw-bold mb-4">
              Links
            </h6>
            <p>
              <a href="../index.html" class="text-white text-decoration-none">HOME</a>
            </p>
            <p>
              <a href="../login.html" class="text-white text-decoration-none">LOGIN</a>
            </p>
            <p>
              <a href="../contactUs.html" class="text-white text-decoration-none">CONTACT</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
    </section>
    {/* <!-- Section: Links  --> */}

    {/* <!-- Copyright --> */}
    <div class="text-center text-white p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
      © 2023 Copyright:
     Zomo.com
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  {/* <!-- Footer --> */}


    </div>
  )
}

export default Footer