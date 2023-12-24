import React from 'react'
import TweetCard from './TweetCard'

const TweetList = () => {
  return (
    <div >
        <div className="container-fluid d-flex bg-white border border-2 border-bottom-0 py-1">
            <div className="fs-5 fw-bold mt-3">
                Home
            </div>
            <button className="btn btn-primary btn-lg shadow m-1 px-5 rounded-5 ms-auto">
                post
            </button>
        </div>
        
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
    </div>
  )
}

export default TweetList