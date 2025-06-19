"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

export interface AgeGenderData {
  age: string;
  male: number;
  female: number;
}

interface AgeGenderChartProps {
  ageGenderData?: AgeGenderData[];
}

const AgeGenderChart = ({ ageGenderData }: AgeGenderChartProps) => {
  // Custom tooltip component with proper typing
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg">
          <p className="font-semibold">{`Age ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // If no data is provided, return null or a placeholder
  if (!ageGenderData) {
    return null;
  }

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg shadow-lg ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={ageGenderData}
          margin={{
            top: 20,
            right: 20,
            left: -30,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="age"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
            domain={[0, 20]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="male"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
            name="Male"
          />
          <Line
            type="monotone"
            dataKey="female"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
            name="Female"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgeGenderChart;
