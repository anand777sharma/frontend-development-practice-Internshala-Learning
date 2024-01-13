import React from 'react'
import Profile from './Profile'

const RightBar = () => {
  return (
    <div>
      <div className="container-fluid bg-white pb-2 sticky-top">
        <form className="d-flex" >
          <input className="form-control fs-5 px-3 py-2 rounded-5 mt-2 shadow" type="text" placeholder="Search" aria-label="Search" />
          <a className="text-decoration-none text-muted" style={{ margin: "20px 0px 0 -35px" }} type="submit"><i className="fas fa-search fa-lg pe-2"></i></a>
        </form>
      </div>
      <div className="card mt-3 rounded-5 border-0 ">
        <p className="fw-bold fs-5 px-2 py-1">
          Who to follow
        </p>
        <div className="list-group border-0">
          <a href="#" className="list-group-item list-group-item-action border-0 rounded-5 " style={{padding:"8px 8px !important"}}><div>
            <div className="d-flex">
              <Profile source="https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=600"
                size="40px" />
              <div>
                <p className="ps-2 fs-6"><span className='fw-bold'>Anand Sharma </span><br /><span style={{fontSize:14}}>@anand777sharma</span></p>
              </div>
              <div>
              <button className="btn btn-primary shadow ms-3 px-3 rounded-5 me-auto">
                follow
            </button>
              </div>
            </div>
          </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action border-0 rounded-5 " style={{padding:"8px 8px !important"}}><div>
            <div className="d-flex">
              <Profile source="https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=600"
                size="40px" />
              <div>
                <p className="ps-2 fs-6"><span className='fw-bold'>Anand Sharma </span><br /><span  style={{fontSize:14}}>@anand777sharma</span></p>
              </div>
              <div>
              <button className="btn btn-primary shadow ms-3 px-3 rounded-5 me-auto">
                follow
            </button>
              </div>
            </div>
          </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action border-0 rounded-5" style={{padding:"8px 8px !important"}}><div>
            <div className="d-flex">
              <Profile source="https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=600"
                size="40px" />
              <div>
                <p className="ps-2 fs-6"><span className='fw-bold'>Anand Sharma </span><br /><span style={{fontSize:14}}>@anand777sharma</span></p>
              </div>
              <div>
              <button className="btn btn-primary shadow ms-3 px-3 rounded-5 me-auto">
                follow
            </button>
              </div>
            </div>
          </div>
          </a>
         </div>
      </div>
    </div>
  )
}

export default RightBar