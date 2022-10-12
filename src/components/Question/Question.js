import React, { useState } from 'react';
import './Question.css'

const Question = (props) => {
    const [number, setNumber] = useState([1]);
    const { id, question, correctAnswer } = props.question; 
    const options = props.question.options; 
    
    // console.log(options);
    return (
        <div className='box'>
            <h5>Quiz {number}: {question}</h5>
            <div className="options">
                
                {options.map(elem => <p className='option'>{elem}</p>)}
                
            </div>
        </div>
    );
};

export default Question;