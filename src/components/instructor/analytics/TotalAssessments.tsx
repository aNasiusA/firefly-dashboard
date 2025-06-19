"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GaugeRadialChart from "./GaugeRadialChart";

export interface Assessments {
  month: string;
  total: number;
  completed: number;
  inProgress: number;
}

interface TotalAssessmentsProps {
  assessmentsArray: Assessments[];
  defaultMonth?: string;
}
const TotalAssessments = ({
  assessmentsArray,
  defaultMonth,
}: TotalAssessmentsProps) => {
  const [selectedMonth, setSelectedMonth] = useState(
    defaultMonth || assessmentsArray[0]?.month || ""
  );

  const selectedAssessment = assessmentsArray.find(
    (assessment) => assessment.month === selectedMonth
  );

  return (
    <Card className="border-[var(--border)] gap-2 h-full flex flex-col p-2 pt-4">
      <CardHeader className="px-3 flex-shrink-0">
        <div className="grid grid-cols-[1fr_40%] gap-4 items-center">
          <CardTitle className="min-w-0 truncate overflow-hidden text-ellipsis gap-2 flex flex-col pb-1">
            <h1>Total Assessments</h1>
            <span className="font-medium">
              {selectedAssessment?.month || "Select a center"}
            </span>
          </CardTitle>
          <div className="w-full">
            <select
              name="center"
              id="center-select"
              className="w-full pl-2 truncate py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {assessmentsArray.map((assessment) => (
                <option key={assessment.month} value={assessment.month}>
                  {assessment.month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>
      <hr className="w-full border-t border-[#f1f1f2] flex-shrink-0" />
      <CardContent>
        <GaugeRadialChart
          completed={selectedAssessment?.completed ?? 0}
          inProgress={selectedAssessment?.inProgress ?? 0}
          total={selectedAssessment?.total ?? 0}
        />
        <div className="flex gap-4 w-full items-center justify-center">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#0BB743] rounded-full"></div>
            <span className="text-sm">Completed</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#FFA500] rounded-full"></div>
            <span className="text-sm">In Progress</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalAssessments;
