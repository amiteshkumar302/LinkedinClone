import React from 'react'
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
  
    <div className='container-fluid' style={{ width: "400px",marginLeft:"38%"}}>
      <form className="card shadow border mt-5 p-4" >
        <h3>Sign in</h3>
        <p>Stay update your professional world</p>

        <div class="input-group">
          <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="email or phone" />
        </div>
        <div class="input-group mt-3">
          <input type="password" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="password" />
        </div>
        <p className='text-primary mt-1 forgot-password'><Link to='/ForgotPassword'><b>Forgot Passsword?</b></Link></p>
        <div className='row'>
        <button type="button" class="btn btn-primary btn-lg btn-block">Sign in</button>
        </div>
        <hr></hr>
        <div className='row'>
        <button type="button" class="btn btn-outline-secondary btn-lg btn-block fa fa-apple">Sign in with Apple</button>
        </div>
        <div className='row mt-3'>
        <button type="button" class="btn btn-outline-secondary btn-lg btn-block fa fa-google">Continue with Google</button>
        </div>
      </form>
      <p className='mt-4'>New to linkedIn? <Link to="/SignUp"><b className='text-primary joinnow'>Join now</b></Link></p>
      </div>
  
  );

}

export default SignIn