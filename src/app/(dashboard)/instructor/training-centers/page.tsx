import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { School } from "lucide-react";
import TrainingCenterCard from "@/components/instructor/trainingCenters/TrainingCenterCard";
import { trainingCenters } from "@/services/mockData";

const TrainingCentersPage = () => {
  return (
    <Card className="border-[var(--border)] py-4 gap-3">
      <CardHeader>
        <div className="flex items-center gap-4">
          <School size={20} className="text-[var(--card-foreground)]" />
          <div className="w-px h-7 bg-[#f1f1f2]" />
          <span className="text-xl font-bold text-[var(--card-foreground)]">
            Training Center (s)
          </span>
        </div>
        <hr className="my-1 w-full border-t border-[#f1f1f2]" />
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trainingCenters.map((center) => (
          <TrainingCenterCard
            key={center.uniqueId}
            trainingCenterArray={center}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default TrainingCentersPage;
