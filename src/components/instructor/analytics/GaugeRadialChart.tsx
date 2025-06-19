"use client";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

interface GaugeRadialChartProps {
  completed: number;
  inProgress: number;
  total: number;
}

const GaugeRadialChart = ({
  completed,
  total,
}: GaugeRadialChartProps) => {
  const percentCompleted = total > 0 ? (completed / total) * 100 : 0;
  const data = [
    {
      name: "Progress",
      count: percentCompleted,
      fill: "#0BB743",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadialBarChart
        cx="50%"
        cy="50%" 
        innerRadius="60%"
        outerRadius="90%"
        barSize={15}
        data={data}
        startAngle={0}
        endAngle={360} 
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          background={{ fill: "#FFA500" }}
          dataKey="count"
          stroke="none"
        />
        {/* Center text showing percentage */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#333"
        >
          {Math.round(percentCompleted)}%
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default GaugeRadialChart;
