import React from 'react'
import Profile from './Profile';

const TweetCard = () => {
  return (
    <div>
      <div className="border border-2 border-bottom-0 ps-3 pe-2 py-2 d-flex">
        <Profile source="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" size="47px" alt="pic" />
        <div className='ps-3'>
          <div className='d-flex align-items-center'>
            <div className='ps-0'>
              <span className='fs-5 fw-bold'> Anand Sharma <i class="fas fa-check-circle fa-md text-primary"></i></span> @anand777sharma<span className="ps-2">
              - 23-December
            </span>
            </div>
            
            <div className="ms-auto fs-3 text-muted ">
            <i class="fas fa-ellipsis-h fa-sm"></i>
            </div>
          </div>

          <div className="card mt-1 p-2 border-0" >
            <p>
              lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
            </p>
            <img src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top rounded-4" alt="pic" />
            <div className="d-flex  px-3 py-2">
              <div className='text-danger pe-4'>
                <i class="far fa-heart fa-lg"></i> 200k
              </div>
              <div className='text-primary pe-4'>
                <i class="far fa-comment fa-lg"></i>45
              </div>
              <div className='text-success pe-4'>
                <i class="fas fa-retweet fa-lg"></i>456
              </div>

            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default TweetCard;