import React from 'react'
import TweetDetail from '../components/TweetDetail'
import SideBar from '../components/SideBar'
import RightBar from '../components/RightBar'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import CreateTweetModal from '../components/CreateTweetModal'
const Tweet = () => {
  return (
    <div>
    <div className="container " >
      <Topbar/>
        <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
                <SideBar />
            </div>
            <div className="col-lg-6 overflow-auto " style={{ height: "100vh" }}>
                <TweetDetail />

                <CreateTweetModal/>

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

export default Tweet