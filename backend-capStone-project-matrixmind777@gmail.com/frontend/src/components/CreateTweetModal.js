import React, { useState } from 'react'
import Profile from './Profile';
import { toast } from 'react-toastify';
import "../allStyle/createtweetmodal.css"
import {useAuth} from "../context/auth";
// import bootstrap from "";
import axios from "axios";
const CreateTweetModal = () => {

    const [auth] = useAuth()
    const [tweet, setTweet] = useState({ content: '' });

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:5000/api/tweet/createtweet', tweet, {
                headers: { Authorization: `Bearer ${auth?.token}` }
            });
            console.log(resp);
            if (resp.status === 201) {
                toast.success(resp.data.message);
                setTweet({ content: '' });
                // const myModal = new bootstrap.Modal(document.getElementById('createtweetModal'));
                // myModal.hide();
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    }

    return (
        <div className="modal fade" id="createtweetModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog rounded-4">
                <div className="modal-content rounded-4">
                    <div className="modal-header border-0"  >
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="modal-body">
                            <div className="d-flex">
                                <Profile size="45px" source="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                                <div className="mb-2" style={{ width: "100%" }}>
                                    <textarea className="form-control border-0" rows="4" placeholder='what is happening?!'
                                        value={tweet.content} onChange={(e) => setTweet({ ...tweet, content: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>
                            <span className="text-primary"><i className="fas fa-globe-americas fa-md"></i> Everyone can reply</span>

                        </div>
                        <div className="modal-footer" >
                            <button className="btn btn-light me-auto text-primary"><i className="far fa-images fa-lg"></i>
                            </button>
                            <button type="submit" className="btn btn-primary shadow rounded-5 py-2 px-4" data-bs-dismiss="modal" >Post</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CreateTweetModal