import React from 'react'
import '../Style/Logo.css'
import { Link } from 'react-router-dom'
const Content = () => {
    return (
        <div className='row container-fluid mt-3'>
            
                <div className='col-md-5 clo-lg-5'>
                    <h1 className='text-info'>Welcome to Your<br />professional community</h1>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    placeholder='Email or Phone Number'></input> &nbsp;
                    <input type="password" class="form-control" id="exampleInputpassword" aria-describedby="password" 
                    placeholder='Enter password'></input>
                    <Link to='/ForgotPassword'>Forgot pasword?</Link><br/>
                    <Link to='/SignIn'><button class="btn btn-primary btn-lg" type="button">Sign In</button></Link>
                </div>
                <div className='col-md-7 col-lg-7'>
                    <img className="image1" src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"></img>
                </div>
            
        </div>
    )
}

export default Content