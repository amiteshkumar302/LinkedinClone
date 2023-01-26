import React from 'react'
import Logo from '../Images/Logo.png';
import { Link } from 'react';
const ForgotPassword = () => {
    return (
        <div className='container-fluid' >
            <div className='row d-inline-flex'>
                <img className='image' src={Logo} alt="linkdin"></img>
                
            </div>



            <div className='row' style={{ width: "400px", marginLeft: "36%" }}>

                <form className="card shadow border mt-3 p-4" >
                    <h3 className=''><b>Forgot Password ?</b></h3>
                    <p>Reset password in two quick steps</p>
                    <div class="input-group">
                        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="email or phone" />
                    </div>
                    <div className='row mt-3'>
                        <button type="button" class="btn btn-primary btn-lg rounded-pill">Reset Password</button>
                    </div>
                    <div>
                        <p className='text-primary mt-3 joinnow'>Back</p>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword