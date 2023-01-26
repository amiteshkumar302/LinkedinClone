import React from 'react'

const ExploreTopic = () => {
    return (
        <div className='row' id='Explore'>
            
                <div className='col-lg-6 mt-3'>
                  <h1>Expore topics you<br/> are intrested in</h1>
                </div>
                <div className='col-lg-6 mt-3'>
                  <h5>Content Topic</h5>
                  <button type="button" class="btn btn-outline-primary">See All Topics</button>
                  <button type="button" class="btn btn-outline-secondary">WorkPlace</button>
                  <button type="button" class="btn btn-outline-success">JobSearch</button>
                  <button type="button" class="btn btn-outline-primary">Career</button><br/>
                  <button type="button" class="btn btn-outline-secondary">Interviewing</button>
                  <button type="button" class="btn btn-outline-success">Salary and Compensation</button>
                  <button type="button" class="btn btn-outline-success">Internship</button><br/>
                  <button type="button" class="btn btn-outline-success">Employee and Benefit</button>
                </div>
            
        </div>
    )
}

export default ExploreTopic