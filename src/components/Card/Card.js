import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    const {id, name, logo, total } = props.quiz;
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div className="lower-part">
                <h3>{name}</h3>
                <Link to=''><button className='practise-btn'>Start Practise &nbsp; <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
            </div>
        </div>
    );
};

export default Card;