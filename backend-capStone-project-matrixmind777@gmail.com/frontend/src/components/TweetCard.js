import React from 'react'
import Profile from './Profile';
// import MoreOption from './MoreOption';

const TweetCard = (props) => {
  return (
    <div>

      <div className="border border-2 border-bottom-0 ps-3 pe-2 py-2 d-flex">
        <Profile source="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" size="40px" alt="pic" />
        <div className='ps-2 w-100 '>
          <div className='d-flex align-items-center w-100'>
            <div className='ps-0'>
              <span className='fs-6 fw-bold'>{props?.item?.tweetedby?.name} <i className="fas fa-check-circle fa-md text-primary"></i></span> @{props?.item?.tweetedby?.username}<span className="ps-2" style={{ fontSize: "12px" }}>
                - 23-December
              </span>
            </div>

            <div className="ms-auto fs-4 text-muted ">
              <div className="dropdown">
                <button className="btn btn-light px-2 py-1 rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-ellipsis-h fa-md"></i>
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item btn btn-light rounded-4"><i className="fas fa-regular fa-user-plus fa-lg"></i> Follow</button></li>
                  <li><button className="dropdown-item btn btn-light rounded-4"><i className="far fa-trash-alt fa-lg"></i> Delete</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card border-0 " >
            <p style={{ fontSize: "14px" }}>

              {props.item?.content}
             
            </p>
            <img src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top rounded-4" alt="pic" style={{ maxWidth: 500 }} />
            <div className="d-flex  px-3 pt-2">
              <div className='text-danger pe-5'>
                <i className="far fa-heart fa-md"></i> {props.item?.likes?.length}
              </div>
              <div className='text-primary pe-5'>
                <i className="far fa-comment fa-md"></i> {props.item?.replies?.length}
              </div>
              <div className='text-success pe-5'>
                <i className="fas fa-retweet fa-md"></i> {props.item?.retweetedby?.length}
              </div>

            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default TweetCard;