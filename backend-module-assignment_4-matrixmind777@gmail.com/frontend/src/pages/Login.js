import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5'>
    <h1 className="text-center mb-3">LOGIN</h1>
    <form>

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

export default Login