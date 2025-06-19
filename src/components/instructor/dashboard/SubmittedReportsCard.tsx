export interface Report {
  id: string;
  title: string;
  date: string;
  time: string;
  summary: string;
}
interface SubmittedReportsCardProps {
  reports: Report;
}

const SubmittedReportsCard = ({ reports }: SubmittedReportsCardProps) => {
  return (
    <div className="border-[var(--border)] border-1 rounded-xl p-3 mb-2">
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between">
        <div className="flex-1 min-w-0 mb-1 sm:mb-0 text-center sm:text-left w-full">
          <span className="block truncate">{reports.title}</span>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <label>{reports.date}</label>
          <label>{reports.time}</label>
        </div>
      </div>
      <hr className="my-2 border-fireflyGray" />
      <div>
        <p className="text-fireflyLightGray text-center sm:text-left">
          {reports.summary}
        </p>
      </div>
    </div>
  );
};

export default SubmittedReportsCard;
