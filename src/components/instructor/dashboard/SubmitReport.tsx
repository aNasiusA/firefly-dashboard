"use client";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/dashboardNavigation";

const SubmitReport = () => {
  const { navigate } = useNavigation();

  const handleNavigation = () => {
    navigate({
      href: "/instructor/reports",
      loadingMessage: "Loading: Reports Page",
      successMessage: "Reports Page Loaded Successfully",
      errorMessage: "Failed to load reports page",
    });
  };

  return (
    <Card className="border-[var(--border)] gap-0 p-3">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Submit New Report</CardTitle>
        <CardAction>
          <Button
            onClick={handleNavigation}
            className="cursor-pointer"
            aria-label="Open reports page"
          >
            Open
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default SubmitReport;
