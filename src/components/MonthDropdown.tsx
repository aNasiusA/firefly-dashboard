"use client";
import { useState } from "react";

const MonthDropdown = () => {
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <select
      id="month"
      name="month"
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
      className="block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
    >
      <option value="jan">Jan</option>
      <option value="feb">Feb</option>
      <option value="mar">Mar</option>
      <option value="apr">Apr</option>
      <option value="may">May</option>
      <option value="jun">Jun</option>
      <option value="jul">Jul</option>
      <option value="aug">Aug</option>
      <option value="sep">Sep</option>
      <option value="oct">Oct</option>
      <option value="nov">Nov</option>
      <option value="dec">Dec</option>
    </select>
  );
};

export default MonthDropdown;
