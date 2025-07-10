import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import TotalReports from "@/components/instructor/reports/TotalReports";
import RecentReports from "@/components/instructor/reports/RecentReports";
import { reportz } from "@/services/mockData";

const ReportsPage = () => {
  return (
    <Card className="border-[var(--border)] py-4 gap-3">
      <CardHeader>
        <div className="flex items-center gap-4">
          <FileText size={20} className="text-[var(--card-foreground)]" />
          <div className="w-px h-7 bg-[#f1f1f2]" />
          <span className="text-xl font-bold text-[var(--card-foreground)]">
            Reports
          </span>
        </div>
        <hr className="my-1 w-full border-t border-[#f1f1f2]" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 w-full h-80">
          <div className="w-1/4">
            <TotalReports ReportArray={reportz} defaultReportId="rpt-jan" />
          </div>
          <div className="w-3/4">
            <RecentReports />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportsPage;
