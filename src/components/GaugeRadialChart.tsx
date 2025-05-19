"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

interface GaugeRadialChartProps {
  submitted: number;
  total: number;
}

const GaugeRadialChart = ({ submitted, total }: GaugeRadialChartProps) => {
  const data = [
    {
      name: "Total",
      count: total,
      fill: "white",
    },
    {
      name: "Report",
      count: submitted,
      fill: "#008000",
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadialBarChart
        cx="50%"
        cy="60%"
        innerRadius="65%"
        outerRadius="100%"
        barSize={20}
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar background dataKey="count" stroke="none" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default GaugeRadialChart;
