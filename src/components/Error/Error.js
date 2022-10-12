import React from 'react';
import './Error.css'
import banner from '../../images/404-banner.webp'

const Error = () => {
    
    return (
        <div className='error'>
            <img src={banner} alt="" />
            <button className='return-btn'><a href="/">Return to home</a></button>
        </div>
    );
};

export default Error;