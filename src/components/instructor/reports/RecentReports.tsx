import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecentReports = ({ ReportArray }) => {
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
    </Card>
  );
};

export default RecentReports;
