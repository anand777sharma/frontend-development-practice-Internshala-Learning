import React from 'react'
import SideBar from '../components/SideBar'
import RightBar from '../components/RightBar'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import CreateTweetModal from '../components/CreateTweetModal'
import ProfileSection from '../components/ProfileSection'

const UserProfile = () => {
  return (
    <div className="container ">
                <Topbar />
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <SideBar />
                    </div>
                    <div className="col-lg-6 overflow-auto " style={{ height: "100vh" }}>
                       <ProfileSection/>

                      <CreateTweetModal/>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block ps-3">
                        <RightBar />
                    </div>
                </div>
                <Navbar />
            </div>
  )
}

export default UserProfile