import React from 'react'
import '../Style/Logo.css';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.png'
const SignUp=()=> {
  return (
    <div className='container-fluid signup' >
        <div className='row'>
        <img className='image' src={Logo} alt="linkdin"></img>
        </div>
        <div className='row'>
            <h3 className='text-center'>Make the most of your professional life</h3>
         </div>
        <div className='row' style={{ width: "400px",marginLeft:"36%"}}>
           
           <form className="card shadow border mt-3 p-4" >
           <div class="input-group">
          <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="email or phone" />
        </div>
        <div class="input-group mt-3">
          <input type="password" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="password" />
        </div>
        <div className='para mt-2'>
            <p>By clicking Agree & Join, you agree to the LinkedIn <span className='text-primary'>User</span> <br/><span className='text-primary'>Agreement,</span> 
            <span className="text-primary">Privacy Policy,</span> and <span className='text-primary'>Cookie Policy</span>.</p>
        </div>
        <div className='row'>
        <button type="button" class="btn btn-primary btn-lg rounded-pill">Agree & Join</button>
        </div>
        <hr/>
        <div className='row mt-3'>
        <button type="button" class="btn btn-outline-secondary btn-lg rounded-pill fa fa-google">Continue with Google</button>
        </div>
        <div>
        <p className='mt-4'>Already on linkedIn? <Link to="/SignIn"><b className='text-primary joinnow'>Sign in</b></Link></p>
         </div>  
           </form>
           <div className='mt-2'>
            <p>Looking to create a page for a business? <span className='text-primary'>Get help</span></p>
           </div>
      </div>
    </div>
  )
}

export default SignUp