"use client";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { type StudentPerformance } from "./AveragePerformance";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  performance: {
    label: "Average Score",
    color: "#2563eb",
  },
} satisfies ChartConfig;

interface AveragePerformanceChartProps {
  performances: StudentPerformance[];
}

const AveragePerformanceChart = ({
  performances,
}: AveragePerformanceChartProps) => {
  const chartData = performances.map((student) => ({
    name: student.studentName.split(" ")[0],
    performance: student.averageScore,
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-[64px] max-h-96 w-full">
      <BarChart
        data={chartData}
        height={64}
        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} tick={{ fontSize: 8 }} width={20} />
        <ChartTooltip content={ <ChartTooltipContent />} />
        <Bar
          dataKey="performance"
          fill="var(--chart-1)"
          radius={[15, 15, 15, 15]}
          barSize={30}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default AveragePerformanceChart;
