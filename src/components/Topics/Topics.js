import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import './Topics.css'

const Topics = () => {
    const allQuizes = useLoaderData();
    const { data } = allQuizes; 
    return (
        <div className='all-cards'>
            {
                data.map(quiz => <Card key={quiz.id} quiz={quiz}></Card>)
            }
        </div>
    );
};

export default Topics;