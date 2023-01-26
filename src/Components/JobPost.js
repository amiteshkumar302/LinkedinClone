import React from 'react'
import '../Style/Logo.css'
const JobPost=()=> {
  return (
    <div className='row JobPost'>
        <div className='col-md-6 mt-3'>
            <h1 className='textcolor'>Post your job For <br/> millions of people to<br/> see</h1>
        </div>
        <div className='col-md-2 mt-5'>
        <button type="button" class="btn btn-outline-primary">Post a job</button>
        </div>
    </div>
  )
}

export default JobPost