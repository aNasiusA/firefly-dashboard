import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AgeAndGenderChart from "./AgeAndGenderChart";
import { ageGenderData } from "@/services/mockData";

const AgeAndGender = () => {
  return (
    <Card className="border-[var(--border)] py-4 gap-0 h-full">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-center gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-gray-400 text-sm">Students</span>
            <span className="text-lg sm:text-xl text-[var(--card-foreground)] break-words">
              Age and Gender
            </span>
          </div>
          <div className="w-full sm:w-auto sm:min-w-[200px] max-w-[300px]">
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-[#2563EB] rounded-full"></div>
                <span>Male</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-[#14B8A6] rounded-full"></div>
                <span>Female</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2 w-full border-t border-[#f1f1f2]" />
      </CardHeader>
      <CardContent className="h-96">
        <AgeAndGenderChart ageGenderData={ageGenderData} />
      </CardContent>
    </Card>
  );
};

export default AgeAndGender;
