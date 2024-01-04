import React from 'react'
import Profile from './Profile';
// import MoreOption from './MoreOption';

const TweetCard = () => {
  return (
    <div>

      <div className="border border-2 border-bottom-0 ps-3 pe-2 py-2 d-flex">
        <Profile source="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" size="40px" alt="pic" />
        <div className='ps-2'>
          <div className='d-flex align-items-center'>
            <div className='ps-0'>
              <span className='fs-6 fw-bold'> Anand Sharma <i class="fas fa-check-circle fa-md text-primary"></i></span> @anand777sharma<span className="ps-2" style={{ fontSize: "12px" }}>
                - 23-December
              </span>
            </div>

            <div className="ms-auto fs-4 text-muted ">
              <div class="dropdown">
                <button className="btn btn-light px-2 py-1 rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-ellipsis-h fa-md"></i>
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item btn btn-light rounded-4"><i class="fas fa-regular fa-user-plus fa-lg"></i> Follow</button></li>
                  <li><button className="dropdown-item btn btn-light rounded-4"><i className="far fa-trash-alt fa-lg"></i> Delete</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card border-0" >
            <p style={{ fontSize: "14px" }}>
              lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
            </p>
            <img src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top rounded-4" alt="pic" style={{ maxWidth: 350 }} />
            <div className="d-flex  px-3 pt-2">
              <div className='text-danger pe-4'>
                <i class="far fa-heart fa-md"></i> 200k
              </div>
              <div className='text-primary pe-4'>
                <i class="far fa-comment fa-md"></i> 45
              </div>
              <div className='text-success pe-4'>
                <i class="fas fa-retweet fa-md"></i> 456
              </div>

            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default TweetCard;