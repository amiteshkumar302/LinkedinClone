import React, { useState } from 'react'
import job1 from '../Images/job1.jpg';
import CardData from '../Constant/CardData';
const JobApply = ({ dataset }) => {
    const [data, setData] = useState(CardData[0]);
    if (data) {
        return (

            <div className='card flex-row h-50'>

                <div className='card-image mt-4 p-2' >
                    <img/>
                </div>


                <div className="card-body" >
                    <h5 className="card-title">fdgh</h5>
                    <h6 className="card-subtitle mb-2 text-muted">uitrtr</h6>
                    <p className="card-text" >gtre</p>
                    <p className="card-text" >mondat</p>
                </div>
                <button className='btn btn-primary'>Apply</button>
            </div>

        )
    }
    else {
        return (
            <>
                <div className='card flex-row'>

                    <div className='card-image mt-4' >
                        <img src={CardData[0].image} />
                    </div>


                    <div className="card-body" >
                        <h5 className="card-title">{CardData[0].title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{CardData[0].heading}</h6>
                        <p className="card-text" >{CardData[0].state}</p>
                        <p className="card-text" >{CardData[0].day}</p>
                    </div>

                </div>
            </>
        )
    }
}

export default JobApply