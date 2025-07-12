"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import {
  Search,
  ArrowUpDown,
  EllipsisVertical,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigation } from "@/hooks/dashboardNavigation";

const RecentReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Status");
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [showActionMenu, setShowActionMenu] = useState(null);
  const actionMenuRef = useRef(null);
  const { navigate } = useNavigation();

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
      dateSubmitted: "28 Jan 2024",
      status: "submitted",
    },
    {
      id: 4,
      name: "January Week 4 Report",
      dateSubmitted: "02 Feb 2024",
      status: "submitted",
    },
    {
      id: 5,
      name: "February Week 1 Report",
      dateSubmitted: "08 Feb 2024",
      status: "submitted",
    },
    {
      id: 6,
      name: "February Week 2 Report",
      dateSubmitted: null,
      status: "not submitted",
    },
  ];

  const filteredAndSortedReports = useMemo(() => {
    const filtered = reports.filter((report) => {
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
        let aValue = a[sortField];
        let bValue = b[sortField];

        if (sortField === "dateSubmitted") {
          if (!aValue && !bValue) return 0;
          if (!aValue) return 1;
          if (!bValue) return -1;
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, statusFilter, sortField, sortDirection]);

  const recentReports = filteredAndSortedReports.slice(0, 3);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const role = document.cookie
    .split("; ")
    .find((row) => row.startsWith("role"))
    ?.split("=")[1];

  const handleAction = (action, report) => {
    setShowActionMenu(null);
    const basePath = `/${role}/reports/${report.id}`;
    const navOptions = {
      loadingMessage: `Loading ${report.name}...`,
      successMessage: `${report.name} loaded successfully`,
    };

    switch (action) {
      case "view":
        navigate({ href: basePath, ...navOptions });
        break;
      case "edit":
        navigate({ href: `${basePath}/edit`, ...navOptions });
        break;
      case "delete":
        if (confirm(`Are you sure you want to delete: ${report.name}?`)) {
          alert(`Deleted: ${report.name}`);
        }
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(event.target)
      ) {
        setShowActionMenu(null);
      }
    };

    if (showActionMenu !== null) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [showActionMenu]);

  return (
    <Card className="border-[var(--border)] gap-0 h-full p-2 pt-4 w-full">
      <CardHeader className="px-4 flex flex-row justify-between items-center mb-2">
        <CardTitle className="text-xl font-semibold text-gray-900">
          Recent Reports
        </CardTitle>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-48 pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search recent reports..."
            />
          </div>
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
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                  >
                    Reports
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("dateSubmitted")}
                    className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                  >
                    Date Submitted
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
              {recentReports.length > 0 ? (
                recentReports.map((report) => (
                  <tr
                    key={report.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {report.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {report.dateSubmitted || (
                        <span className="italic text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          report.status === "submitted"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {report.status === "submitted"
                          ? "Submitted"
                          : "Not Submitted"}
                      </span>
                    </td>
                    <td className="px-6 py-4 relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // ⬅️ Prevent closing immediately
                          setShowActionMenu(
                            showActionMenu === report.id ? null : report.id
                          );
                        }}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center text-gray-500 hover:text-gray-700"
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
                              onClick={() => handleAction("view", report)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <Eye size={16} />
                              View Report
                            </button>
                            <button
                              onClick={() => handleAction("edit", report)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <Edit size={16} />
                              Edit Report
                            </button>
                            <button
                              onClick={() => handleAction("delete", report)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <Trash2 size={16} />
                              Delete Report
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
                    colSpan="4"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No recent reports found matching your criteria.
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
