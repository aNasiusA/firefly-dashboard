import { LayoutDashboard } from "lucide-react";
import InstructorCard from "@/components/instructor/dashboard/InstructorCard";
import CenterStats from "@/components/instructor/dashboard/CenterStats";
import Sessions from "@/components/instructor/dashboard/Sessions";
import RecentNotifications from "@/components/instructor/dashboard/RecentNotifications";
import SubmitReport from "@/components/instructor/dashboard/SubmitReport";
import SubmittedReports from "@/components/instructor/dashboard/SubmittedReports";
import Quizzes from "@/components/instructor/dashboard/Quizzes";

import { centers } from "@/services/mockData";
import { instructor } from "@/services/mockData";
import { sessions } from "@/services/mockData";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
const Page = () => {
  return (
    <div>
      <Card className="border-[var(--border)] py-4 gap-3 ">
        <CardHeader>
          <div className="flex items-center gap-4">
            <LayoutDashboard
              size={20}
              className="text-[var(--card-foreground)]"
            />
            <div className="w-px h-7 bg-[#f1f1f2]" />
            <span className="text-xl font-bold text-[var(--card-foreground)]">
              Instructor Dashboard
            </span>
          </div>
          <hr className="my-1 w-full border-t border-[#f1f1f2]" />
        </CardHeader>
        <CardContent>
          <div className="px-4 flex flex-col md:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full md:w-2/3">
              <InstructorCard instructor={instructor} />
              <div className="flex flex-col lg:flex-row w-full mt-4 gap-4">
                <div className="w-full lg:w-1/2 h-80">
                  <CenterStats
                    centersArray={centers}
                    defaultCenterId="center-a"
                  />
                </div>
                <div className="w-full lg:w-1/2 h-80">
                  <Sessions
                    sessionsArray={sessions}
                    defaultSessionId="session-1"
                  />
                </div>
              </div>
              <div className="mt-4">
                <RecentNotifications />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col w-full gap-4">
                <SubmitReport />
                <SubmittedReports />
                <Quizzes />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
