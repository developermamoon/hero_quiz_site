import React, { useState } from 'react';
import './Question.css'

const Question = (props) => {
    
    const { id, question, correctAnswer } = props.question; 
    const {index} = props;
    const options = props.question.options; 
    // console.log(options);
    return (
        <div className='box'>
            <h5>Quiz {index}: {question}</h5>
            <div className="options">
                
                {options.map(elem => <p className='option'>{elem}</p>)}
                
            </div>
            
        </div>
    );
};

export default Question;