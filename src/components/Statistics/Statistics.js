import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const data = useLoaderData();
    const total = data.data;
    return (
        <div className='statistisc'>
            <h2>Statistics of Quiz topic Questions</h2>
            <div>
                <BarChart className='big-chart' width={400} height={350} data={total}>

                    <CartesianGrid strokeDasharray="6 6" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>


                <ResponsiveContainer width="90%" height={400} className="small-chart">
                <BarChart width={200} height={350} data={total}>

                    <CartesianGrid strokeDasharray="6 6" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;