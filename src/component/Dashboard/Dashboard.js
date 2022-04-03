import React from 'react';
import ChartLine from './LineChart/LineChart';

import ChartPie from './ChartPie';
import ChartBar from './ChartBar';

const Dashboard = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h2>Month Investment</h2>
            <ChartBar></ChartBar>
            <h2>Month Wish Sell Sell</h2>
            <ChartLine></ChartLine>
   
            <h2>Invesment VS Revanue</h2>
            <ChartPie></ChartPie>
            
        </div>
    );
};



export default Dashboard;

