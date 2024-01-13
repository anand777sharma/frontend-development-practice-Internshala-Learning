import React from 'react'
import Profile from './Profile'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>

      <div className="card border-0 " >
        <div className="px-3 py-4 border-0">
          <img style={{ height: "40px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="logo" />
        </div>
        <ul className="list-group overflow-auto border-0" style={{ height: "67vh" }}>
          <Link className='text-decoration-none' to="/home" ><li className="list-group-item border-0 fs-5 mt-1"><i className="fas fa-home fa-lg pe-2"></i>Home</li> </Link>

          <Link className='text-decoration-none' to="/explore"><li className="list-group-item border-0 fs-5 mt-1"><i className="fas fa-search fa-lg pe-2"></i>Explore</li></Link>
          <Link className='text-decoration-none' to="/notification"><li className="list-group-item border-0 fs-5 mt-1"><i className="fas fa-bell fa-lg pe-2"></i>Notification</li></Link>
          <Link className='text-decoration-none' to="/profile"><li className="list-group-item border-0 fs-5 mt-1"><i className="fas fa-user fa-lg pe-2"></i>Profile</li></Link>

          <li className="list-group-item border-0 fs-5 mt-1">
            <div className="d-grid gap-2 px-3">
              <button className="btn btn-primary shadow rounded-5 btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#createtweetModal">Post</button>
            </div>
          </li>

        </ul>
        <div className="">
          <ul className="list-group">
            <li className="list-group-item border-0 fs-5 mt-1"><i className="fas fa-sign-out-alt fa-lg pe-2"></i>Logout</li>
            <li className="list-group-item border-0 fs-5 mt-1 d-flex">
              <Profile size="40px" source="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
              <div>
                <p className="ps-2 fs-6">Anand Sharma <br /><span className='fs-6'>@anand777sharma</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar




