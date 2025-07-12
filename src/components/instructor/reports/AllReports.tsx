"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowUpDown,
  EllipsisVertical,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigation } from "@/hooks/dashboardNavigation";

const AllReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [showActionMenu, setShowActionMenu] = useState<number | null>(null);
  const actionMenuRef = useRef<HTMLDivElement | null>(null);
  const { navigate, isNavigating } = useNavigation();

  const reports = [
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

        if (sortField === "timeSubmitted") {
          if (!aValue && !bValue) return 0;
          if (!aValue) return 1;
          if (!bValue) return -1;
          const convertTo24Hour = (time: string) => {
            const [timePart, modifier] = time.split(" ");
            let [hours, minutes] = timePart.split(":");
            if (hours === "12") hours = "00";
            if (modifier === "PM")
              hours = (parseInt(hours, 10) + 12).toString();
            return `${hours.padStart(2, "0")}:${minutes}`;
          };
          aValue = convertTo24Hour(aValue);
          bValue = convertTo24Hour(bValue);
        }

        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, statusFilter, sortField, sortDirection]);

  const totalPages = Math.ceil(filteredAndSortedReports.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReports = filteredAndSortedReports.slice(startIndex, endIndex);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleAction = (action: string, report: any) => {
    setShowActionMenu(null);
    const role = document.cookie
      .split("; ")
      .find((row) => row.startsWith("role"))
      ?.split("=")[1];

    switch (action) {
      case "view":
        navigate({
          href: `/${role}/reports/${report.id}`,
          loadingMessage: `Loading ${report.name}...`,
          successMessage: `${report.name} loaded successfully`,
        });
        break;
      case "edit":
        navigate({
          href: `/${role}/reports/${report.id}/edit`,
          loadingMessage: `Loading ${report.name}...`,
          successMessage: `${report.name} loaded successfully`,
        });
        break;
      case "delete":
        if (confirm(`Are you sure you want to delete: ${report.name}?`)) {
          alert(`Deleted: ${report.name}`);
        }
        break;
      default:
        alert(`Action ${action} for: ${report.name}`);
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(i);
            }}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  // Detect click outside action menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
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
          <h1 className="text-xl font-semibold text-gray-900">All Reports</h1>
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
              className="block w-48 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Search reports..."
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
                    className="flex items-center gap-1 w-full hover:text-gray-700"
                  >
                    <span>Reports</span>
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("dateSubmitted")}
                    className="flex items-center gap-1 w-full hover:text-gray-700"
                  >
                    <span>Date Submitted</span>
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("timeSubmitted")}
                    className="flex items-center gap-1 w-full hover:text-gray-700"
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
                currentReports.map((report) => (
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
                        onClick={() =>
                          setShowActionMenu(
                            showActionMenu === report.id ? null : report.id
                          )
                        }
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
                              <Eye size={16} /> View Report
                            </button>
                            <button
                              onClick={() => handleAction("edit", report)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <Edit size={16} /> Edit Report
                            </button>
                            <button
                              onClick={() => handleAction("delete", report)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
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
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-gray-700">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredAndSortedReports.length)} of{" "}
            {filteredAndSortedReports.length} results
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Show:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(e.target.value)}
                className="w-20 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                  {renderPaginationItems()}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages)
                          setCurrentPage(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AllReports;
