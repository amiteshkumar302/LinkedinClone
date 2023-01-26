import React from 'react';
import Logo from '../Images/Logo.png';
import '../Style/Logo.css';
import { Link } from 'react-router-dom';

const Header = () => {
    // const navigate = useNavigate();
    
    return (
        <div className='container-fluid'>
            <nav className='d-flex flex-row col-md-12 mt-3'>
                <div className='col-md-5'>
                <img className='image' src={Logo} alt="linkdin"></img>
                </div>
                <div className='d-flex flex-row-reverse col-md-7'>
                    <div className='col-md-1'>
                        <Link to="/SignIn"><button type="button" className="btn btn-outline-primary">SignIn</button></Link>
                    </div>

                    <div className='col-md-1'>
                        <Link to="/SignUp"><h5>Join now</h5></Link>
                    </div>
                    <div className='vr'>|</div>
                    <div className='col-md-1'>
                        <i class="fa fa-car"></i><br/>
                        
                        
                    </div>
                    
                    <div className='col-md-1'>
                        <i class="fa fa-car"></i><br />
                        <p>learning</p>
                    </div>
                    
                    <div className='col-md-1'>
                        <i class="fa fa-car"></i><br />
                        <p>people</p>
                    </div>

                    <div className='col-md-1'>
                        <i class="fa fa-car"></i><br />
                        <p>Discover</p>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header