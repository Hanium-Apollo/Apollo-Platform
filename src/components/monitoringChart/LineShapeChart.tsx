import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import { DataProps } from "../../pages/Monitoring/Monitor";

const LineShapeChart = (props: DataProps) => {
  const [data, setData] = useState<any[]>([]);

  const xAxisRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (xAxisRef.current) {
        const chartWidth = xAxisRef.current.getBoundingClientRect().width;
        const calculatedFontSize = chartWidth * 0.01; // 차트 너비의 1%를 폰트 크기로 설정
        xAxisRef.current.style.fontSize = `${calculatedFontSize}px`;
      }
    };

    handleResize(); // 초기 로딩 시 폰트 크기 설정

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // props.values가 변경될 때마다 데이터 업데이트
    const newData = props.timestamps.map((timestamp, index) => ({
      name: moment(timestamp).format("HH:mm"),
      Bytes: props.values[index],
    }));
    setData(newData);
  }, [props.timestamps, props.values]);

  return (
    <div className="chart-container">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" ref={xAxisRef} tick={{ dy: 8 }} />
          <YAxis tick={{ dy: 8 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            dataKey="Bytes"
            name="Bytes" // 그래프 선의 이름
            stroke="rgba(75,192,192,1)"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineShapeChart;
