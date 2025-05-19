import ReportCount from "@/components/Reports Page/ReportCount";
import RecentReports from "@/components/Reports Page/RecentReports";

const ReportPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row ">
      <div className="flex gap-4 w-full flex-col lg:flex-row">

        <div className="lg:w-1/4">
          <ReportCount />
        </div>

        <div className="lg:w-3/4 ">
          <RecentReports />
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
