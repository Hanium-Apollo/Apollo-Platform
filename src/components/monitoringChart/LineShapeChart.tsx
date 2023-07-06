import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';

interface DataPoint {
  name: string;
  Bytes: number;
}

const MAX_DATA_POINTS = 5;

const LineShapeChart: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([
    { name: moment().format('HH:mm'), Bytes: Math.floor(Math.random() * 100) },
  ]);

  const xAxisRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData: DataPoint[] = [
          ...prevData.slice(-(MAX_DATA_POINTS - 1)),
          { name: moment().format('HH:mm'), Bytes: Math.floor(Math.random() * 100) },
        ];
        return newData;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (xAxisRef.current) {
        const chartWidth = xAxisRef.current.getBoundingClientRect().width;
        const calculatedFontSize = chartWidth * 0.01; // 차트 너비의 1%를 폰트 크기로 설정
        xAxisRef.current.style.fontSize = `${calculatedFontSize}px`;
      }
    };

    handleResize(); // 초기 로딩 시 폰트 크기 설정

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='chart-container'>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" ref={xAxisRef} tick={{ dy: 8 }}/> 
          <YAxis tick={{ dy: 8 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="Bytes" stroke="rgba(75,192,192,1)" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineShapeChart;
