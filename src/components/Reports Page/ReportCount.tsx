"use client";
import { useState } from "react";
import MonthDropdown from "../MonthDropdown";
import GaugeRadialChart from "../GaugeRadialChart";

const ReportCount = () => {
  const [submitted] = useState(8);
  const [total] = useState(10);

  return (
    <div className="bg-white rounded-xl w-full h-full">
      {/* Title and Dropdown */}
      <div className="flex justify-between items-center w-full shadow-sm px-4 py-2 rounded-t-xl">
        <h1 className="text-lg font-semibold">Reports</h1>
        <MonthDropdown />
      </div>
      <div className="p-4">
        {/* Chart and Total Reports */}
        <div className="relative w-full">
          <GaugeRadialChart submitted={submitted} total={total} />
          <div className="flex justify-center items-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-md font-medium">Total Reports</p>
            <h1 className="font-bold text-lg">{submitted}</h1>
          </div>
        </div>

        {/* Submitted and Not submitted */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 h-2 w-2 rounded-full"></div>
            <p>Submitted</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-fireflyGray h-2 w-2 rounded-full"></div>
            <p>Not Submitted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCount;
