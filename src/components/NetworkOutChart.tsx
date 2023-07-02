import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment'; // moment.js library

const MAX_DATA_POINTS = 10; // Maximum number of data points to display

const NetworkOutChart = () => {
  const [data, setData] = useState([
    { name: moment().format('HH:mm:ss'), value: Math.floor(Math.random() * 100) },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [
        ...data.slice(-MAX_DATA_POINTS + 1), // Keep only the latest MAX_DATA_POINTS - 1 data points
        { name: moment().format('HH:mm:ss'), value: Math.floor(Math.random() * 100) },
      ];
      setData(newData);
    }, 5000); // Update data every 5 seconds

    return () => {
      clearInterval(interval); // Clear interval when the component unmounts
    };
  }, [data]);

  return (
    <div className='chart-container'>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="value" stroke="rgba(75,192,192,1)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NetworkOutChart;
