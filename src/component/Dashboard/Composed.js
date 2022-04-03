import React from 'react';
import { Bar, XAxis, YAxis, Tooltip, CartesianGrid, ComposedChart, Legend, Area, Line } from 'recharts';
import useJson from '../../hooks/useReview';

const ChartComposed = () => {
    const data = useJson('chart')
    return (<div>
        <ComposedChart width={730} height={250} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
    </div>)
};

export default ChartComposed;