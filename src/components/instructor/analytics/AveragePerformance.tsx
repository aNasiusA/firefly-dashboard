"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AveragePerformanceChart from "./AveragePerformanceChart";

export interface StudentPerformance {
  studentName: string;
  averageScore: number;
}

export interface MonthlyPerformance {
  month: string;
  performances: StudentPerformance[];
}

export interface AveragePerformanceProps {
  performances: MonthlyPerformance[];
}

const AveragePerformance = ({ performances }: AveragePerformanceProps) => {
  const [selectedMonth, setSelectedMonth] = useState(
    performances[0]?.month || ""
  );

  const selectedPerformances =
    performances.find((p) => p.month === selectedMonth)?.performances || [];

  return (
    <Card className="border-[var(--border)] py-4 gap-0">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-center gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-gray-400 text-sm">Statistics</span>
            <span className="text-lg sm:text-xl text-[var(--card-foreground)] break-words">
              Average Performance Per Student
            </span>
          </div>
          <div className="w-full sm:w-auto sm:min-w-[200px] max-w-[300px]">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            >
              {performances.map((performance) => (
                <option key={performance.month} value={performance.month}>
                  {performance.month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr className="my-2 w-full border-t border-[#f1f1f2]" />
      </CardHeader>
      <CardContent className="px-2 flex items-center justify-center">
        <AveragePerformanceChart performances={selectedPerformances} />
      </CardContent>
    </Card>
  );
};

export default AveragePerformance;