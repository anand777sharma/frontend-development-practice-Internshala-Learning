import React from 'react';
import "../allStyle/tweetDetail.css"
import Reply from './Reply'
import TweetCard from './TweetCard'

const TweetDetail = () => {
  return (
    <div> <div className="container-fluid d-flex bg-white  py-1 border border-2 border-bottom-0">
    <div className="fs-5 fw-bold mt-3">
        Tweet
    </div>
    <button className="btn btn-primary btn-lg shadow m-1 px-5 rounded-5 ms-auto" data-bs-toggle="modal" data-bs-target="#createtweetModal">
        post
    </button>
</div>
<TweetCard/>
<Reply/>
<Reply/>
<Reply/>
<Reply/>
<Reply/>
<Reply/>
<Reply/>
<Reply/>
<Reply/>
<Reply/>
</div>
  )
}

export default TweetDetail