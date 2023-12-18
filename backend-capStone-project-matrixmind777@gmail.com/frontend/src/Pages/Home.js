import React from 'react'
import SideBar from '../components/SideBar'
import TweetList from '../components/TweetList'
import RightBar from '../components/RightBar'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
const Home = () => {
    return (
        <div>
            <div className="container ">
              <Topbar/>
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <SideBar />
                    </div>
                    <div className="col-lg-6 overflow-auto " style={{ height: "100vh" }}>
                        <TweetList />
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <RightBar />
                    </div>
                </div>
                <Navbar/>
            </div>
            
        </div>
    )
}

export default Home