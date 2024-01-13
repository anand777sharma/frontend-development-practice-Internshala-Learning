import React from 'react';
import "../allStyle/tweetDetail.css";
import TweetCard from './TweetCard'
import axios from 'axios';
import Profile from "./Profile"
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

const TweetList = () => {

  // const navigate = useNavigate();
  const [tweets, setTweets] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await axios.get('http://localhost:5000/api/tweet/getalltweet');
      setTweets(resp.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div >
      <div className="container-fluid d-flex bg-white border border-2 border-bottom-0 py-1">
        <div className="fs-5 fw-bold mt-3">
          Home
        </div>
        <button className="btn btn-primary btn-lg shadow m-1 px-5 rounded-5 ms-auto" data-bs-toggle="modal" data-bs-target="#createtweetModal">
          post
        </button>
      </div>

      {
        tweets.map((item) => (
          <>
       <TweetCard item={item}/>
          </>

        ))
      }


    
    </div>
  )
}

export default TweetList