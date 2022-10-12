import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Questions.css'

const Questions = () => {
    const quizQuestions = useLoaderData();
    const { name, total } = quizQuestions.data;
    // console.log(quizQuestions.data.questions);
    const questions = quizQuestions.data.questions;
    // console.log(questions.length);
    return (
        <div>
            <div className="title">
                <h4>Quiz of {name} </h4>
                <h5>Number of questions: {total}</h5>
                <div className=''>
                    {
                        questions.map((question,index) => <Question key = {question.id} question = {question} index = {index+1}></Question>)
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;