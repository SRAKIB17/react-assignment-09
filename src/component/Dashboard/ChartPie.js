import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import useJson from '../../hooks/useReview';

const ChartPie = () => {
    const data = useJson('chart')
    return (
        <div>
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip />

            </PieChart>
        </div>
    );
};

export default ChartPie;