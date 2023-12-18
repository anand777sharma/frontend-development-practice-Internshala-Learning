import React from 'react'
import Profile from './Profile'

const SideBar = () => {
  return (
    <div>

<div className="card border-0  ps-5" >
  <div className="px-3 py-4 border-0">
  <img style={{height:"40px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="logo"/>
  </div>
  <ul className="list-group overflow-auto border-0" style={{height:"67vh"}}>
  <li className="list-group-item border-0 fs-5 mt-1"><i class="fas fa-home fa-lg pe-2"></i>Home</li>
  <li className="list-group-item border-0 fs-5 mt-1"><i class="fas fa-search fa-lg pe-2"></i>Explore</li>
  <li className="list-group-item border-0 fs-5 mt-1"><i class="fas fa-bell fa-lg pe-2"></i>Notification</li>
  <li className="list-group-item border-0 fs-5 mt-1"><i class="fas fa-user fa-lg pe-2"></i>Profile</li>
  <li className="list-group-item border-0 fs-5 mt-1">
  <div class="d-grid gap-2 px-2">
  <button class="btn btn-primary shadow rounded-5 btn-lg" type="button">Post</button>
</div>
    </li>
</ul>
<div className="">
<ul className="list-group">
<li className="list-group-item border-0 fs-5 mt-1"><i class="fas fa-sign-out-alt fa-lg pe-2"></i>Logout</li>
<li className="list-group-item border-0 fs-5 mt-1 d-flex"><Profile   size="45px" source="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" /> 
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