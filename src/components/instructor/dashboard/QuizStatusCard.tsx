type QuizStatus = "Completed" | "Pending" | string;

interface QuizStatusCardProps {
  title: string;
  status: QuizStatus;
}

const QuizStatusCard: React.FC<QuizStatusCardProps> = ({ title, status }) => {
  const statusStyles: Record<
    string,
    { border: string; bg: string; text: string }
  > = {
    Completed: {
      border: "border-fireflyGreen",
      bg: "bg-fireflySuccessMain",
      text: "text-fireflyGreen",
    },
    Pending: {
      border: "border-fireflyBlue",
      bg: "bg-fireflyBluePending",
      text: "text-fireflyBlue",
    },
  };

  const styles = statusStyles[status] || {
    border: "border-gray-400",
    bg: "bg-gray-200",
    text: "text-gray-600",
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="border-2 border-fireflyLightGray rounded-lg p-2 px-5 w-1/2 min-w-[160px] font-medium">
        <span>{title}</span>
      </div>
      <div
        className={`border-2 ${styles.border} rounded-lg p-2 px-5 w-1/4 min-w-[120px] ${styles.bg} ${styles.text} flex items-center justify-center`}
      >
        <span>{status}</span>
      </div>
    </div>
  );
};

export default QuizStatusCard;
