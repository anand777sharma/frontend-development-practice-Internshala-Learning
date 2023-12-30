import React from 'react';
import "./homecover.css";

const HomeCover = () => {

  return (
    <div>
      {/* Background image */}
      <div className="p-5 text-center bg-image" >
        {/* div is created to hold the title of the page and subheading */}
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white home-heading">
            <p className="display-1 fw-bold">Zemo Store</p>
            <p className="display-5 fw-medium">Aapka Apna Baazar</p>
          </div>
        </div>
      </div>
      {/* Background image */}
    </div>
  )
}

export default HomeCover