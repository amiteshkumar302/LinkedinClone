import React, { useState } from 'react'
import Card from '../Components/Card'
import JobApply from '../Components/JobApply'
import CardData from '../Constant/CardData'

const Job = () => {

    // const [content,setcontent]=useState(Joblist[0]);
     return (
        <>
        <div className='row'>
            <div className='col-lg-6'>
            <Card detail={CardData}/>
            </div>
            <div className='col-lg-6'>
                <JobApply/>
            </div>
        </div>
        
        </>
    )
   
   


}

export default Job