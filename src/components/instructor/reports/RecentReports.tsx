"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  ArrowUpDown,
  EllipsisVertical,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { useNavigation } from "@/hooks/dashboardNavigation";

// Types
interface Report {
  id: number;
  name: string;
  dateSubmitted: string | null;
  timeSubmitted: string | null;
  status: "submitted" | "not submitted";
}

type StatusFilter = "Status" | "Submitted" | "Not Submitted";
type SortField = keyof Report | "";
type SortDirection = "asc" | "desc";
type ActionType = "view" | "edit" | "delete";

interface NavigationParams {
  href: string;
  loadingMessage: string;
  successMessage: string;
}

// Mock data - in a real app, this would come from an API
const MOCK_REPORTS: Report[] = [
  {
    id: 1,
    name: "January Week 1 Report",
    dateSubmitted: "25 Jan 2024",
    timeSubmitted: "10:30 AM",
    status: "submitted",
  },
  {
    id: 2,
    name: "January Week 2 Report",
    dateSubmitted: null,
    timeSubmitted: null,
    status: "not submitted",
  },
  {
    id: 3,
    name: "January Week 3 Report",
    dateSubmitted: "28 Jan 2024",
    timeSubmitted: "2:45 PM",
    status: "submitted",
  },
  {
    id: 4,
    name: "January Week 4 Report",
    dateSubmitted: "02 Feb 2024",
    timeSubmitted: "9:15 AM",
    status: "submitted",
  },
  {
    id: 5,
    name: "February Week 1 Report",
    dateSubmitted: "08 Feb 2024",
    timeSubmitted: "11:20 AM",
    status: "submitted",
  },
  {
    id: 6,
    name: "February Week 2 Report",
    dateSubmitted: null,
    timeSubmitted: null,
    status: "not submitted",
  },
  {
    id: 7,
    name: "February Week 3 Report",
    dateSubmitted: "22 Feb 2024",
    timeSubmitted: "3:30 PM",
    status: "submitted",
  },
  {
    id: 8,
    name: "February Week 4 Report",
    dateSubmitted: "29 Feb 2024",
    timeSubmitted: "8:45 AM",
    status: "submitted",
  },
  {
    id: 9,
    name: "March Week 1 Report",
    dateSubmitted: "07 Mar 2024",
    timeSubmitted: "1:10 PM",
    status: "submitted",
  },
  {
    id: 10,
    name: "March Week 2 Report",
    dateSubmitted: null,
    timeSubmitted: null,
    status: "not submitted",
  },
  {
    id: 11,
    name: "March Week 3 Report",
    dateSubmitted: "21 Mar 2024",
    timeSubmitted: "4:25 PM",
    status: "submitted",
  },
  {
    id: 12,
    name: "March Week 4 Report",
    dateSubmitted: "28 Mar 2024",
    timeSubmitted: "10:05 AM",
    status: "submitted",
  },
];

const RecentReports: React.FC = () => {
  // State with proper types
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Status");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);
  const [sortField, setSortField] = useState<SortField>("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [showActionMenu, setShowActionMenu] = useState<number | null>(null);

  // Refs
  const actionMenuRef = useRef<HTMLDivElement>(null);

  // Custom hook
  const { navigate, isNavigating } = useNavigation();

  // Utility functions
  const convertTo24Hour = (time: string): string => {
    const [timePart, modifier] = time.split(" ");
    let hours;
    const [hoursTemp, minutes] = timePart.split(":");
    hours = hoursTemp;
    if (hours === "12") hours = "00";
    if (modifier === "PM") {
      hours = (parseInt(hours, 10) + 12).toString();
    }
    return `${hours.padStart(2, "0")}:${minutes}`;
  };

  const getRoleFromCookie = (): string => {
    return (
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("role"))
        ?.split("=")[1] || ""
    );
  };

  // Memoized filtered and sorted reports
  const filteredAndSortedReports = useMemo((): Report[] => {
    const filtered = MOCK_REPORTS.filter((report) => {
      const matchesSearch = report.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "Status" ||
        (statusFilter === "Submitted" && report.status === "submitted") ||
        (statusFilter === "Not Submitted" && report.status === "not submitted");

      return matchesSearch && matchesStatus;
    });

    if (sortField) {
      filtered.sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (sortField === "dateSubmitted") {
          if (!aValue && !bValue) return 0;
          if (!aValue) return 1;
          if (!bValue) return -1;
          return new Date(aValue).getTime() - new Date(bValue).getTime();
        }

        if (sortField === "timeSubmitted") {
          if (!aValue && !bValue) return 0;
          if (!aValue) return 1;
          if (!bValue) return -1;

          const aTime = convertTo24Hour(aValue as string);
          const bTime = convertTo24Hour(bValue as string);
          return (
            aTime.localeCompare(bTime) * (sortDirection === "asc" ? 1 : -1)
          );
        }

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
        }

        return 0;
      });
    }

    return filtered;
  }, [searchTerm, statusFilter, sortField, sortDirection]);

  // Pagination calculations
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReports = filteredAndSortedReports.slice(startIndex, endIndex);

  // Event handlers
  const handleSort = (field: SortField): void => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleAction = (action: ActionType, report: Report): void => {
    setShowActionMenu(null);
    const role = getRoleFromCookie();

    const navigationParams: NavigationParams = {
      href: `/${role}/reports/${report.id}${action === "edit" ? "/edit" : ""}`,
      loadingMessage: `Loading ${report.name}...`,
      successMessage: `${report.name} loaded successfully`,
    };

    switch (action) {
      case "view":
      case "edit":
        navigate(navigationParams);
        break;
      case "delete":
        if (confirm(`Are you sure you want to delete: ${report.name}?`)) {
          alert(`Deleted: ${report.name}`);
          // In a real app, you would call an API to delete the report
        }
        break;
      default:
        alert(`Action ${action} for: ${report.name}`);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleStatusFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setStatusFilter(e.target.value as StatusFilter);
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Effect for handling clicks outside action menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(e.target as Node)
      ) {
        setShowActionMenu(null);
      }
    };

    if (showActionMenu !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showActionMenu]);

  return (
    <Card className="border-[var(--border)] gap-0 h-full p-2 pt-4 w-full">
      <CardHeader className="px-4 flex flex-row justify-between items-center mb-2">
        <CardTitle className="min-w-0 truncate overflow-hidden text-ellipsis">
          <h1 className="text-xl font-semibold text-gray-900">Recent Reports</h1>
        </CardTitle>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-48 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Search reports..."
            />
          </div>
          <select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            className="block w-32 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Status">Status</option>
            <option value="Submitted">Submitted</option>
            <option value="Not Submitted">Not Submitted</option>
          </select>
        </div>
      </CardHeader>

      <hr className="w-full border-t border-[#f1f1f2]" />

      <CardContent className="px-3 mt-3">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center gap-1 w-full hover:text-gray-700"
                    disabled={isNavigating}
                  >
                    <span>Reports</span>
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("dateSubmitted")}
                    className="flex items-center gap-1 w-full hover:text-gray-700"
                    disabled={isNavigating}
                  >
                    <span>Date Submitted</span>
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("timeSubmitted")}
                    className="flex items-center gap-1 w-full hover:text-gray-700"
                    disabled={isNavigating}
                  >
                    <span>Time Submitted</span>
                    <ArrowUpDown size={16} />
                  </button>
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
              {currentReports.length > 0 ? (
                currentReports.slice(0, 3).map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {report.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {report.dateSubmitted || (
                        <span className="text-gray-400 italic">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {report.timeSubmitted || (
                        <span className="text-gray-400 italic">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
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
                    <td className="px-6 py-4 relative">
                      <button
                        disabled={isNavigating}
                        onClick={() =>
                          setShowActionMenu(
                            showActionMenu === report.id ? null : report.id
                          )
                        }
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-50"
                      >
                        <EllipsisVertical size={16} />
                      </button>
                      {showActionMenu === report.id && (
                        <div
                          ref={actionMenuRef}
                          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                        >
                          <div className="py-1">
                            <button
                              disabled={isNavigating}
                              onClick={() => handleAction("view", report)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                            >
                              <Eye size={16} /> View Report
                            </button>
                            <button
                              disabled={isNavigating}
                              onClick={() => handleAction("edit", report)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                            >
                              <Edit size={16} /> Edit Report
                            </button>
                            <button
                              disabled={isNavigating}
                              onClick={() => handleAction("delete", report)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
                            >
                              <Trash2 size={16} /> Delete Report
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No reports found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentReports;
