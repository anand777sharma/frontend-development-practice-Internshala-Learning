import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/auth';
function Profile() {
    const [auth, setAuth] = useAuth();
    // const [data,setData]=useState(null)
    const navigate = useNavigate();
    // useEffect(()=>{
    // setData(auth.user)
    // },[])
    return (
        <div>
            <h1 className='text-center'>Profile Page</h1>
            <hr />
            <div className="row">
                <div className="col-lg-3">
                    <div className="d-grid gap-4">
                        <button className="btn btn-light shadow" type="button">My Orders</button>
                        <button className="btn btn-light shadow" type="button">Edit Profile</button>
                    </div>
                </div>
                <div className="col-lg-9 ">
                    <div className="row mx-auto">
                        <div className="col-lg-2">
                            <h3>Name : </h3>
                            <h3>UserName :  </h3>
                            <h3>Email : </h3>
                        </div>
                        <div className="col-lg-6">
                            <h3>{`${auth?.user?.name}`}</h3>
                            <h3>{`${auth?.user?.username}`}</h3>
                            <h3>{`${auth?.user?.email}`}</h3>
                        </div>
                    </div>

                </div>
            </div>

            {/* <pre>
                {JSON.stringify(auth, null, 4)}
            </pre> */}
        </div>
    );
}

export default Profile;