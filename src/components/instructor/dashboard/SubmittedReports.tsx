"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SubmittedReportsCard from "./SubmittedReportsCard";
import { reports } from "@/services/mockData";
import { useNavigation } from "@/hooks/dashboardNavigation";
import { role } from "@/services/mockData";

const SubmittedReports = () => {
  const { navigate } = useNavigation();

  const handleNavigation = (url: string, title: string) => {
    navigate({
      href: `/${role}${url}`,
      loadingMessage: `Loading ${title}...`,
      successMessage: `${title} loaded successfully`,
    });
  };

  return (
    <Card className="border-[var(--border)] gap-0 p-3">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Submitted Reports</CardTitle>
        <CardAction>
          <Button
            variant="link"
            className="text-xs text-[var(--secondary)] cursor-pointer"
            onClick={() => handleNavigation("/reports", "Reports")}
          >
            See all...
          </Button>
        </CardAction>
      </CardHeader>
      <hr className="w-full border-t border-[#f1f1f2]" />
      <CardContent className="mt-4">
        {reports.slice(0, 3).map((n) => (
          <SubmittedReportsCard reports={n} key={n.id} />
        ))}
      </CardContent>
    </Card>
  );
};

export default SubmittedReports;
