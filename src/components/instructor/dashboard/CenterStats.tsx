"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export interface Center {
  id: string;
  name: string;
  director: string;
  region: string;
  numberOfStudents: number;
  numberOfMales: number;
  numberOfFemales: number;
}

interface CenterStatsProps {
  centersArray: Center[];
  defaultCenterId?: string;
}

const CenterStats = ({ centersArray, defaultCenterId }: CenterStatsProps) => {
  const [selectedCenterId, setSelectedCenterId] = useState(
    defaultCenterId || centersArray[0]?.id || ""
  );

  const selectedCenter = centersArray.find(
    (center) => center.id === selectedCenterId
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCenterId(e.target.value);
  };

  if (!centersArray.length) {
    return (
      <Card>
        <CardContent>
          <p>No centers available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-[var(--border)] gap-2 h-full flex flex-col p-2 pt-4">
      <CardHeader className="px-3 flex-shrink-0">
        <div className="grid grid-cols-[1fr_40%] gap-4 items-center">
          <CardTitle className="min-w-0 truncate overflow-hidden text-ellipsis">
            {selectedCenter?.name || "Select a center"}
          </CardTitle>
          <div className="w-full">
            <select
              name="center"
              id="center-select"
              className="w-full pl-2 truncate py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={selectedCenterId}
              onChange={handleChange}
            >
              {centersArray.map((center) => (
                <option key={center.id} value={center.id}>
                  {center.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>
      <hr className="w-full border-t border-[#f1f1f2] flex-shrink-0" />

      <CardContent className="px-3 flex-1 flex items-center">
        <div className="grid grid-cols-[auto_1fr] gap-4 min-w-0 w-full">
          <div className="flex flex-col text-[var(--accent-foreground)] whitespace-nowrap space-y-2">
            <span>Name:</span>
            <span>Director:</span>
            <span>Region:</span>
            <span>No. of Students:</span>
            <span>No. of Male:</span>
            <span>No. of Female:</span>
          </div>
          <div className="flex flex-col min-w-0 space-y-2">
            <span className="truncate">{selectedCenter?.name || "N/A"}</span>
            <span className="truncate">
              {selectedCenter?.director || "N/A"}
            </span>
            <span className="truncate">{selectedCenter?.region || "N/A"}</span>
            <span className="truncate">
              {selectedCenter?.numberOfStudents || 0}
            </span>
            <span className="truncate">
              {selectedCenter?.numberOfMales || 0}
            </span>
            <span className="truncate">
              {selectedCenter?.numberOfFemales || 0}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default CenterStats;
