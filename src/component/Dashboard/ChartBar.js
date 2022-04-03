import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart } from 'recharts';
import useJson from '../../hooks/useReview';

const ChartBar = () => {
    const data = useJson('chaart')
    return (<div>
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="investment" fill="#8884d8" barSize={30} />
        </BarChart>
    </div>)
};

export default ChartBar;