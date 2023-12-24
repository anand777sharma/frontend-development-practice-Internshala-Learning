import React from 'react'

const Register = () => {
  return (
    <div className='container mt-5'>
    <h1 className="text-center mb-3">REGISTER</h1>
    <form>

        <div className="mb-3">
            <label for="firstname" className="form-label">FIRST NAME </label>
            <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="mb-3">
            <label for="lastname" className="form-label">LAST NAME</label>
            <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="mb-3">
            <label for="emailid" className="form-label">EMAIL</label>
            <input type="email" className="form-control" id="emailid" />
        </div>
        <div className="mb-3">
            <label for="passwordid" className="form-label">PASSWORD</label>
            <input type="password" className="form-control" id="passwordid" />
        </div>
       

        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">Submit</button>
        </div>
    </form>

</div>
  )
}

export default Register