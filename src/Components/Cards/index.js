import React, { useState } from 'react';
import ViewModal from '../../screens/JobsPost/ViewModal';
import './index.scss';

const Cards = (props)=>{
    const [visibility,setVisibility] = useState(false)
    return(
        <>
        <ViewModal visibility={visibility} setVisibility={setVisibility}/>
        <div className='cards-container'>
            <p className='cards-heading-text'>{props.heading}</p>
            <p className='cards-paragraph-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className='cards-details'>
            {props.location?
            <div className='cards-location'>
                <img src='https://image.shutterstock.com/image-vector/pin-point-logo-can-be-260nw-1679653036.jpg' alt='location icon' width='15px' height='15px'/>
                <p className='cards-location-text'>{props.locationArea}</p>
            </div>:''}

            {props.view?
            <button className='cards-view' onClick={()=>setVisibility(true)}>View Applications</button>:''}
            </div>
        </div>
        </>
    )
}

export default Cards;