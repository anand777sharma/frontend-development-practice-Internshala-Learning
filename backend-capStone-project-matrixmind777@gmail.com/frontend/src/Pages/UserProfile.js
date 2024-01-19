import React from 'react'
import "../allStyle/profilesection.css"
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import CreateTweetModal from '../components/floatingModels/CreateTweetModal'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import EditProfileModal from "../components/floatingModels/EditProfileModal"
import Profile from '../components/Profile'
import TweetCard from '../components/TweetCard'


const UserProfile = () => {

  const [auth, setAuth] = useAuth();
  const [profile, setProfile] = useState(null);
  const [tweets, setTweets] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const resp = await axios.get('http://localhost:5000/api/user/' + id);
      const Pdata = resp.data;
      setProfile(Pdata);

    } catch (error) {
      console.log(error);
    }
  }
  const fetchTweet = async () => {
    try {
      const resp = await axios.get( `http://localhost:5000/api/user/${id}/tweets`);
      setTweets(resp.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    fetchTweet();
  }, [])
  console.log(profile);
  return (
    <div className="container ">
      <Topbar />
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
          <SideBar />
        </div>
        <div className="col-lg-6 overflow-auto " style={{ height: "100vh" }}>
          <div>
            <EditProfileModal />
            <div className="container-fluid d-flex align-items-center bg-white border border-2 border-bottom-0 py-1">
              <Link className="btn btn-light rounded-5" to="/home">
                <i className=" fas fa-solid fa-arrow-left"></i>
              </Link>
              &nbsp;
              &nbsp;
              &nbsp;
              <div className="fs-5 mt-1 ">
                <span className="fw-bold">
                  {profile?.name}
                </span>

                <div className="post-count">
                  3 posts
                </div>
              </div>

            </div>
            <div className="card rounded-0" >
              <div className="card-header border-0 shadow-none rounded-0">
                <div className="profilePicture d-flex justify-content-center align-items-center">
                  <Profile size="140px" source={profile?.profileImg} alt="profile" />
                </div>
              </div>
              <div className="ms-auto">
                <button className="btn btn-outline-secondary rounded-5 m-3 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#editProfileModal">Edit Profile</button>
              </div>
              <div className='card-body'>
                <p className='ps-4 text-secondary'>
                  <span className="fs-5 fw-bold text-dark">
                    {profile?.name}
                  </span> <br />
                  <span className='username text-secondary '>
                    @{profile?.username}
                  </span>
                </p>
                <p className='ps-4 text-secondary'>
                  <p className='mb-2'>
                    <i class="far fa-calendar-alt fa-lg mb-2"></i>
                    &nbsp;
                    joined {profile?.createdAt}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {profile?.location ? (<><i className="fas fa-map-marker-alt fa-lg"></i> {profile?.location}</>) : ('')}
                    <br />

                    {profile?.dateofbirth ? (<><i className="fas fa-map-marker-alt fa-lg mt-2"></i> {profile?.dateofbirth}</>) : ('')}

                  </p>

                  <span><span className="fw-bold"> {profile?.following.length} </span>Following  </span>
                  &nbsp;
                  &nbsp;
                  <span><span className="fw-bold">{profile?.followers.length}</span> Followers  </span>
                </p>
              </div>
              <div className="card-footer text-center fw-bold fs-6">
                Tweet and Replies
              </div>
            </div>
            {
              tweets.map((item) => (
                <>
                  <TweetCard item={item} />
                </>

              ))
            }

          </div>

          <CreateTweetModal />
        </div>
        <div className="col-lg-3 d-none d-lg-block ps-3">
          {/* <RightBar /> */}
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default UserProfile;