"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import GaugeRadialChart from "../dashboard/GaugeRadialChart";

export interface Reports {
  id: string;
  month: string;
  total: number;
  completed: number;
  pending: number;
}

interface ReportProps {
  ReportArray: Reports[];
  defaultReportId?: string;
}

const TotalReports = ({ ReportArray, defaultReportId }: ReportProps) => {
  const [selectedReportId, setSelectedReportId] = useState(defaultReportId);

  const selectedReport = ReportArray.find(
    (report) => report.id === selectedReportId
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedReportId(e.target.value);
  };
  if (!ReportArray.length) {
    return (
      <Card>
        <CardContent>
          <p>No sessions available</p>
        </CardContent>
      </Card>
    );
  }
  if (!selectedReport) {
    return (
      <Card>
        <CardContent>
          <p>Session not found</p>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="border-[var(--border)] gap-0 h-full p-2 pt-4 w-full">
      <CardHeader className="px-4">
        <div className="grid grid-cols-[1fr_40%] gap-4 items-center">
          <CardTitle className="min-w-0 truncate overflow-hidden text-ellipsis">
            Reports
          </CardTitle>
          <div className="w-full">
            <select
              name="session"
              id="session-select"
              className="w-full pl-2 truncate py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={selectedReportId}
              onChange={handleChange}
            >
              {ReportArray.map((report) => (
                <option key={report.id} value={report.id}>
                  {report.month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>
      <hr className="w-full border-t border-[#f1f1f2]" />
      <CardContent className="px-3 mt-3">
        <GaugeRadialChart
          completed={selectedReport.completed}
          total={selectedReport.total}
        />

        {/* Optional: Display session stats */}
        <div className="mt-4 text-sm text-gray-600 flex justify-around  ">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 h-2 w-2 rounded-full"></div>
            <span>Completed</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-orange-500 h-2 w-2 rounded-full"></div>
            <span>Pending</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalReports;
