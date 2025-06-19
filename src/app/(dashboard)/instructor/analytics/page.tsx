import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import StatCard from "@/components/instructor/analytics/StatCard";
import { statistics } from "@/services/mockData";
import AveragePerformance from "@/components/instructor/analytics/AveragePerformance";
import { groupedStudentPerformances } from "@/services/mockData";
import AgeAndGender from "@/components/instructor/analytics/AgeAndGender";
import TotalAssessments from "@/components/instructor/analytics/TotalAssessments";
import { assessmentsData } from "@/services/mockData";

const AnalyticsPage = () => {
  return (
    <div className="p-4 sm:p-6">
      <Card className="border-[var(--border)] py-4 gap-3">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <ChartNoAxesColumnIncreasing
              size={20}
              className="text-[var(--card-foreground)] flex-shrink-0"
            />
            <div className="w-px h-7 bg-[#f1f1f2]" />
            <span className="text-lg sm:text-xl font-bold text-[var(--card-foreground)]">
              Analytics
            </span>
          </div>
          <hr className="my-2 w-full border-t border-[#f1f1f2]" />
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {statistics.map((stat, index) => (
              <div key={index} className="w-full">
                <StatCard statisticObject={stat} />
              </div>
            ))}
          </div>

          {/* Performance Chart */}
          <div className="w-full">
            <AveragePerformance performances={groupedStudentPerformances} />
          </div>

          <div className="flex flex-col sm:flex-row w-full mt-4 gap-4 h-full">
            <div className="w-full sm:w-2/3">
              <AgeAndGender />
            </div>
            <div className="w-full sm:w-1/3 max-h-96">
              <TotalAssessments assessmentsArray={assessmentsData} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPage;
