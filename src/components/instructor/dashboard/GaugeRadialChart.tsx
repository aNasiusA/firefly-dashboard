"use client";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

interface GaugeRadialChartProps {
  completed: number;
  total: number;
}

const GaugeRadialChart = ({ completed, total }: GaugeRadialChartProps) => {
  const percent = (completed / total) * 100;

  const data = [
    {
      name: "Progress",
      count: percent,
      fill: "#0BB743", // Green for completed
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={160}>
      <RadialBarChart
        cx="50%"
        cy="60%"
        innerRadius="90%"
        outerRadius="110%"
        barSize={15}
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          background={{ fill: "#FFA500" }} // Orange for pending
          dataKey="count"
          stroke="none"
        />
        {/* Center text showing percentage */}
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#333"
        >
          {Math.round(percent)}%
        </text>
        {/* Subtitle text */}
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fill="#666"
        >
          {completed} of {total} sessions
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default GaugeRadialChart;