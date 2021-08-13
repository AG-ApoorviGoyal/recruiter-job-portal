import React from 'react';
import Dashboard from '../Dashboard';
import './index.scss';

const Logout = ()=>{
    return(
        <>
        <Dashboard images={false}/>
        <div className='logout-container'>
            <img src='https://p.kindpng.com/picc/s/80-805570_close-button-comments-clear-background-transparent-black-x.png' alt='Close icon' width='10px' height='10px' className='logout-image'/>
            <div className='logout-text'>
            <p className='logout-heading'>Logout</p>
            <p className='logout-paragraph'>You have successfully logged out.</p>
            </div>
        </div>
        </>
    )
}

export default Logout;