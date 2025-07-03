"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Search, ArrowUpDown, EllipsisVertical } from "lucide-react";

const RecentReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Status");

  const reports = [
    {
      id: 1,
      name: "January Week 1 Report",
      dateSubmitted: "25 Jan 2024",
      status: "submitted",
    },
    {
      id: 2,
      name: "January Week 2 Report",
      dateSubmitted: null,
      status: "not submitted",
    },
    {
      id: 3,
      name: "January Week 3 Report",
      dateSubmitted: "25 Jan 2024",
      status: "submitted",
    },
    {
      id: 4,
      name: "January Week 4 Report",
      dateSubmitted: "25 Jan 2024",
      status: "submitted",
    },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "Status" ||
      (statusFilter === "Submitted" && report.status === "submitted") ||
      (statusFilter === "Not Submitted" && report.status === "not submitted");

    return matchesSearch && matchesStatus;
  });

  const handleActionClick = (reportName) => {
    alert(`Action clicked for: ${reportName}`);
  };

  return (
    <Card className="border-[var(--border)] gap-0 h-full p-2 pt-4 w-full">
      <CardHeader className="px-4">
        <CardTitle className="min-w-0 truncate overflow-hidden text-ellipsis">
          <h1 className="text-xl font-semibold text-gray-900">
            Recent Reports
          </h1>
        </CardTitle>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-48 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Search"
          />
        </div>
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="block w-32 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Status</option>
            <option>Submitted</option>
            <option>Not Submitted</option>
          </select>
        </div>
      </CardHeader>
      <hr className="w-full border-t border-[#f1f1f2]" />
      <CardContent className="px-3 mt-3">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reports
                <ArrowUpDown />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Submitted
                <ArrowUpDown />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredReports.map((report) => (
              <tr
                key={report.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {report.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {report.dateSubmitted ? (
                    <span>{report.dateSubmitted}</span>
                  ) : (
                    <span className="text-gray-400 italic">-</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      report.status === "submitted"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {report.status === "submitted"
                      ? "Submitted"
                      : "Not submitted"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleActionClick(report.name)}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <EllipsisVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default RecentReports;
