import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';

const MAX_DATA_POINTS = 5;

const DiskChart = () => {
  const [data, setData] = useState([
    { name: moment().format('HH:mm:ss'), value: Math.floor(Math.random() * 100) },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [
          ...prevData.slice(-(MAX_DATA_POINTS - 1)),
          { name: moment().format('HH:mm:ss'), value: Math.floor(Math.random() * 100) },
        ];
        return newData;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

export default DiskChart;
