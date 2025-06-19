import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuizStatusCard from "./QuizStatusCard";
import { quizStatus } from "@/services/mockData";

const Quizzes = () => {
  return (
    <Card className="border-[var(--border)] gap-0 p-3">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Quizzes</CardTitle>
        <CardAction>
          <Button>View Quizzes</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        {quizStatus.slice(0, 4).map((card, index) => (
          <QuizStatusCard key={index} title={card.title} status={card.status} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Quizzes;
