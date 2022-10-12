import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import image from '../../images/banner5.jpg'
import { Link } from 'react-router-dom';
import Topics from '../Topics/Topics';
import { Button } from 'react-bootstrap';

const Home = () => {
    
    return (
        <div>
            <div className="banner">
                <div className="text-part">
                    <div className="div">
                        <h1>Test your Skills</h1>
                        <div className='div-btn'>
                            <Link to='/topics'>
                                <button className='quiz-btn' >Take a quiz&nbsp; <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <img src={image} alt="" />
            </div>

        <div className="quiz-part">
                
                <Topics></Topics>
        </div>
        </div>
    );
};

export default Home;