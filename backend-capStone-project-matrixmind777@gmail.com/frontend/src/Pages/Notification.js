import React from 'react'
import SideBar from '../components/SideBar'
import RightBar from '../components/RightBar'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import CreateTweetModal from '../components/CreateTweetModal'

const Notification = () => {
    return (
        <div>
            <div className="container " >
                <Topbar />
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <SideBar />
                    </div>
                    <div className="col-lg-6 " >
                        <div className="container-fluid d-flex bg-white border border-2 border-bottom-0 py-1">
                            <div className="fs-5 fw-bold mt-3">
                              Notification
                            </div>
                            <button className="btn btn-primary btn-lg shadow m-1 px-5 rounded-5 ms-auto" data-bs-toggle="modal" data-bs-target="#createtweetModal">
                                post
                            </button>
                        </div>
                        <div className="border border-2 border-bottom-0 overflow-auto" style={{ height: "90vh" }}>
                        <p className='p-3 mt-3 text-center fs-2 fw-bold'>
                        Nothing to see here — yet
                        </p>

                        </div>
            
                        <CreateTweetModal />
                    </div>
                    <div className="col-lg-3 d-none d-lg-block ps-3">
                        <RightBar />
                    </div>
                </div>
                <Navbar />
            </div>

        </div>
    )
}

export default Notification