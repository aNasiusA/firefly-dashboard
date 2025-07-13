"use client";
// import { useParams } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigation } from "@/hooks/dashboardNavigation";
import { Button } from "@/components/ui/button";
import ReportEdit1 from "@/components/instructor/reports/ReportEdit1";
import ReportEdit2 from "@/components/instructor/reports/ReportEdit2";
import ReportEdit3 from "@/components/instructor/reports/ReportEdit3";
import ProgressComponent from "@/components/instructor/reports/ProgressComponent";

const Page = () => {
  // const params = useParams();
  const { navigate, isNavigating } = useNavigation();
  const [reportName] = useState("January Week 2 Report");
  // setReportName
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Basic Details" },
    { id: 2, label: "About Session" },
    { id: 3, label: "Feedback" },
  ];
  const handleReportNavigation = () => {
    try {
      const role = document.cookie
        .split("; ")
        .find((row) => row.startsWith("role"))
        ?.split("=")[1];
      navigate({
        href: `/${role}/reports`,
        loadingMessage: `Loading Reports page...`,
        successMessage: `Reports page loaded successfully`,
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <>
      <div className="my-2 ml-2">
        <h1 className="font-medium text-2xl">{reportName}</h1>

        <div className="flex items-center gap-1 text-gray-400">
          <Button
            onClick={handleReportNavigation}
            disabled={isNavigating}
            className="bg-transparent shadow-none text-gray-400 hover:bg-transparent cursor-pointer p-0"
          >
            Reports
          </Button>
          <p>{">"}</p>
          <p>{reportName}</p>
        </div>
      </div>
      <Card className="border-[var(--border)] py-4 gap-3 mb-16">
        <CardHeader>
          <div className="relative w-full">
            <h1 className="text-2xl my-2 font-medium text-center">
              {reportName}
            </h1>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-1 items-center text-sm text-gray-500">
              <p>Date:</p>
              <p>Jan 25, 2024</p>
            </div>
          </div>

          <div className="w-full text-center text-gray-400">
            <p>
              Please take a moment to fill out the following report form after
              each training session. Your feedback is essential to help us track
              progress, improve training quality, and support student success.
            </p>
          </div>
          <hr className="my-1 w-full border-t border-[#f1f1f2]" />
        </CardHeader>
        <CardContent className="mt-4">
          <div className="w-full">
            <ProgressComponent currentStep={currentStep} steps={steps} />
          </div>

          <div className="flex justify-between mx-auto w-full px-8">
            {currentStep === 1 ? (
              <ReportEdit1
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                totalSteps={steps.length}
              />
            ) : currentStep === 2 ? (
              <ReportEdit2
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                totalSteps={steps.length}
              />
            ) : currentStep === 3 ? (
              <ReportEdit3
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                totalSteps={steps.length}
              />
            ) : null}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Page;
