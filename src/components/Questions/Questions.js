import React from 'react';
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
                        questions.map(question => <Question key = {question.id} question = {question}></Question>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;