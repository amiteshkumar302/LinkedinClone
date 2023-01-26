import React from 'react'
import { useState,useEffect } from 'react'
import down from '../Images/down.png'
import up from '../Images/up.png'
import '../Style/Logo.css'
const ExploreJob=()=> {

  const [show,setShow]=useState(true);

  if(show){
    return(
      <div className='row'>
            
                <div className='col-lg-6 mt-3'>
                  <h1>Find the Right job or<br/> internship for you</h1>
                </div>
                <div className='col-lg-6 mt-3'>
                  <h5>Suggested Search</h5>
                  <button type="button" class="btn btn-outline-primary">Engineering</button>
                  <button type="button" class="btn btn-outline-secondary">Business Development</button>
                  <button type="button" class="btn btn-outline-success">Finance</button><br/>
                  <button type="button" class="btn btn-outline-primary">Adminstrative Assistant</button>
                  <button type="button" class="btn btn-outline-secondary">Retail Associate</button>
                  <button type="button" class="btn btn-outline-success">Customer Service</button>
                  <button type="button" class="btn btn-outline-success">Operation</button><br/>
                  <button type="button" class="btn btn-outline-success">Information Technology</button>
                  <a><img src={down} alt='down-arrow' className='downImage' onClick={()=>setShow(false)}></img></a>
                </div>
                </div>
    );
    }
  else{
   
  return (
    <div className='row'>
            
                <div className='col-lg-6 mt-3'>
                  <h1>Find the Right job or<br/> internship for you</h1>
                </div>
                <div className='col-lg-6 mt-3'>
                  <h5>Suggested Search</h5>
                  <button type="button" class="btn btn-outline-primary">Engineering</button>
                  <button type="button" class="btn btn-outline-secondary">Business Development</button>
                  <button type="button" class="btn btn-outline-success">Finance</button><br/>
                  <button type="button" class="btn btn-outline-primary">Adminstrative Assistant</button>
                  <button type="button" class="btn btn-outline-secondary">Retail Associate</button>
                  <button type="button" class="btn btn-outline-success">Customer Service</button>
                  <button type="button" class="btn btn-outline-success">Operation</button><br/>
                  <button type="button" class="btn btn-outline-success">Information Technology</button>
                 <button type="button" class="btn btn-outline-primary">Adminstrative Assistant</button>
                  <button type="button" class="btn btn-outline-secondary">Retail Associate</button>
                  <button type="button" class="btn btn-outline-success">Customer Service</button>
                  <button type="button" class="btn btn-outline-success">Operation</button><br/>
                  <button type="button" class="btn btn-outline-success">Information Technology</button>
                  <img src={up} alt='down-arrow' className='downImage' onClick={()=>setShow(true)}></img>
                </div>
                
               
               
               
        </div>
  )
}
}
export default ExploreJob