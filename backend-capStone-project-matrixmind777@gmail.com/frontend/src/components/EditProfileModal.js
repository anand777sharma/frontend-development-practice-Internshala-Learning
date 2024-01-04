import React from 'react'
import Profile from './Profile'
import "../allStyle/createtweetmodal.css"

const EditProfileModal = () => {
    return (
        <div className="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog rounded-4">
                <div className="modal-content rounded-4">
                    <div className="modal-header border-0 " style={{height:50}} >
                    <button type="button" class="btn btn-light rounded-5 px-3 fs-4" data-bs-dismiss="modal" aria-label="Close">X</button>
                  
                        <p className="fw-bold fs-5 mt-4">
                            Edit Profile
                        </p>
                        <button className="btn btn-primary rounded-5 px-4">
                            Save
                        </button>
                     </div>
                    <div className="modal-body">
                        <div className="card rounded-0" >
                            <div className="card-header border-0 shadow-none rounded-0">
                                <div className="profilePicture d-flex justify-content-center align-items-center">
                                    <Profile size="140px" source="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                                </div>
                            </div>
                            <div className='card-body'>
                                <br />
                                <br />
                                <br />
                                <div className="mb-3">
                                    <label for="nameInput" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="nameInput" placeholder="Enter name" value="Anand Sharma" />
                                </div>
                                <div className="mb-3">
                                    <label for="nameInput" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="nameInput" placeholder="Enter name" value="Anand Sharma" />
                                </div>
                                <div className="mb-3">
                                    <label for="nameInput" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="nameInput" placeholder="Enter name" value="Anand Sharma" />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditProfileModal