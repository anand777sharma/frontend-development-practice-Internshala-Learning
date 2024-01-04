import React from 'react'
import Profile from './Profile'
import "../allStyle/createtweetmodal.css"

const CreateTweetModal = () => {
    return (
        <div className="modal fade" id="createtweetModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog rounded-4">
                <div className="modal-content rounded-4">
                    <div className="modal-header border-0"  >
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex">
                            <Profile size="45px" source="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                            <div class="mb-2" style={{ width: "100%" }}>
                                <textarea class="form-control border-0" rows="4" placeholder='what is happening?!'></textarea>
                            </div>
                        </div>
                        <span className="text-primary"><i class="fas fa-globe-americas fa-md"></i> Everyone can reply</span>
                      
                    </div>
                    <div className="modal-footer" >
                        <button className="btn btn-light me-auto text-primary"><i class="far fa-images fa-lg"></i>
                        </button>
                        <button type="button" className="btn btn-primary shadow rounded-5 py-2 px-4">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTweetModal