import React from 'react'
import createImage from '../Images/createImage.svg'
import learnImage from '../Images/learnImage.svg'
import '../Style/Logo.css';
const LearnAndConnect=()=> {
  return (
    <div className='row'>
        <div className='col-md-6'>
        <img className= 'createImage mt-5' src={createImage} alt="create"/>
        <h1>Connect with people<br/> who can help</h1>
        <button className='rounded-pill'>Find people you know</button>
        </div>
        <div className='col-md-6'>
        <img className='learnimage mt-5' src={learnImage} alt="learnimage"/>
        <h1>Learn the skills you <br/>need to succeed</h1>
        </div>
    </div>
  )
}

export default LearnAndConnect