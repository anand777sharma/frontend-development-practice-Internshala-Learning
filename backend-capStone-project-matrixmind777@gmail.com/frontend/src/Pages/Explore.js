import React from 'react'
import SideBar from '../components/SideBar'
import RightBar from '../components/RightBar'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import CreateTweetModal from '../components/CreateTweetModal'

const Explore = () => {
    return (
        <div>
            <div className="container " >
                <Topbar />
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <SideBar />
                    </div>
                    <div className="col-lg-6 " >
                        <div className="container-fluid bg-white border border-2 border-bottom-0 pb-2 ">
                            <form className="d-flex" >
                                <input className="form-control fs-5 px-3 py-2 rounded-5 mt-2 shadow" type="text" placeholder="Search" aria-label="Search" />
                                <a className="text-decoration-none text-muted" style={{ margin: "20px 0px 0 -35px" }} type="submit"><i className="fas fa-search fa-lg pe-2"></i></a>
                            </form>
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

export default Explore