import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for demonstration
const mockStudentAttendance = Array.from({ length: 50 }, (_, i) => ({
  studentName: `Student ${i + 1}`,
  studentIndex: i + 1,
}));

const StudentAttendance = ({
  studentName,
  studentIndex,
  isChecked,
  onToggle,
}) => {
  return (
    <div className="flex items-center p-2 px-4 gap-8 border-b border-gray-100 hover:bg-gray-50">
      <div className="flex gap-2 items-center">
        <Input
          type="checkbox"
          className="w-5 h-5"
          checked={isChecked}
          onChange={onToggle}
        />
        <Label className="min-w-[30px]">{studentIndex}</Label>
      </div>
      <div className="flex-1">{studentName}</div>
    </div>
  );
};

export default function StudentAttendanceWithPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedStudents, setCheckedStudents] = useState(new Set());
  const studentsPerPage = 10;

  // Calculate pagination
  const totalPages = Math.ceil(mockStudentAttendance.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;
  const currentStudents = mockStudentAttendance.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle student attendance toggle
  const handleStudentToggle = (studentIndex) => {
    const newCheckedStudents = new Set(checkedStudents);
    if (newCheckedStudents.has(studentIndex)) {
      newCheckedStudents.delete(studentIndex);
    } else {
      newCheckedStudents.add(studentIndex);
    }
    setCheckedStudents(newCheckedStudents);
  };

  // Handle select all toggle
  const handleSelectAll = () => {
    const currentStudentIndices = currentStudents.map(
      (student) => student.studentIndex
    );
    const allCurrentSelected = currentStudentIndices.every((index) =>
      checkedStudents.has(index)
    );

    const newCheckedStudents = new Set(checkedStudents);

    if (allCurrentSelected) {
      // Uncheck all current page students
      currentStudentIndices.forEach((index) =>
        newCheckedStudents.delete(index)
      );
    } else {
      // Check all current page students
      currentStudentIndices.forEach((index) => newCheckedStudents.add(index));
    }

    setCheckedStudents(newCheckedStudents);
  };

  // Check if all current page students are selected
  const allCurrentSelected = currentStudents.every((student) =>
    checkedStudents.has(student.studentIndex)
  );
  const someCurrentSelected = currentStudents.some((student) =>
    checkedStudents.has(student.studentIndex)
  );

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than or equal to max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis logic
      if (currentPage <= 3) {
        // Show first 4 pages
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        // Show last 4 pages
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show current page and surrounding pages
        for (let i = currentPage - 1; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="w-full p-4">
      <Card className="border-[var(--border)] py-4 gap-0 w-full">
        <CardHeader className="mb-2">
          <div>
            <h1>
              Student Attendance
              <span className="text-red-500">*</span>
            </h1>
          </div>
          <div>
            <p className="text-xs text-gray-400">
              Please tick the checkboxes of all the students that were present
              during the session.
            </p>
          </div>
        </CardHeader>

        {/* Header row */}
        <div className="bg-gray-200 flex items-center p-2 px-4 gap-8">
          <div className="flex gap-2 items-center">
            <Input
              type="checkbox"
              className="w-5 h-5"
              checked={allCurrentSelected}
              ref={(input) => {
                if (input)
                  input.indeterminate =
                    someCurrentSelected && !allCurrentSelected;
              }}
              onChange={handleSelectAll}
            />
            <Label>S.L</Label>
          </div>
          <div>Name of Student</div>
        </div>

        <CardContent className="p-0">
          {currentStudents.map((student) => (
            <StudentAttendance
              key={student.studentIndex}
              studentName={student.studentName}
              studentIndex={student.studentIndex}
              isChecked={checkedStudents.has(student.studentIndex)}
              onToggle={() => handleStudentToggle(student.studentIndex)}
            />
          ))}
        </CardContent>

        <CardFooter className="flex justify-between items-center pt-4 px-4">
          <div className="text-sm text-gray-500">
            <p>
              <span>Selected:</span>
              <span>{checkedStudents.size}</span>
            </p>
          </div>

          <Pagination>
            <PaginationContent>
              {/* Previous button */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  className={
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {/* Page numbers */}
              {pageNumbers.map((pageNum) => (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(pageNum);
                    }}
                    isActive={currentPage === pageNum}
                    className="cursor-pointer"
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Next button */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      handlePageChange(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}
