import React from 'react'
import { useState } from 'react';
import CardData from '../Constant/CardData';
import '../Style/Logo.css';
import JobApply from './JobApply';
const Card = (props) => {
    
    return (
        <>
            {props.detail.map((value, index) => (

                <div className='card flex-row' key={index} onClick={JobApply()}>

                    <div className='card-image mt-4' >
                        <img src={value.image} />
                    </div>


                    <div className="card-body" >
                        <h5 className="card-title">{value.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{value.heading}</h6>
                        <p className="card-text" >{value.state}</p>
                        <p className="card-text" >{value.day}</p>
                    </div>

                </div>

            ))}
            
        </>
    )
}

export default Card