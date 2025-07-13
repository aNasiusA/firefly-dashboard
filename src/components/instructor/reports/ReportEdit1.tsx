"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomTime from "@/components/instructor/reports/CustomTime";
import CustomDate from "@/components/instructor/reports/CustomDate";

type ReportEdit2Props = {
  setCurrentStep: (step: number) => void;
  currentStep: number;
  totalSteps: number;
};

const ReportEdit1 = ({
  setCurrentStep,
  currentStep,
  totalSteps,
}: ReportEdit2Props) => {
  return (
    <>
      <Card className="border-[var(--border)] py-4 gap-3 mb-16 w-full">
        <CardContent className="mt-4">
          <div className="flex justify-between mx-auto w-full px-8">
            <div className="w-1/3 flex flex-col gap-16">
              <div className="flex flex-col gap-2 items">
                <Label>
                  Instructor&apos;s Name <span className="text-red-500">*</span>
                </Label>
                <Input></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label>
                  Training Location<span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full p-6 px-4">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>
                  Time the session started
                  <span className="text-red-500">*</span>
                </Label>
                <div className="flex items-center gap-4 w-full max-w-md">
                  <div className="w-1/4">
                    <CustomTime />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="p-6">
                        <SelectValue placeholder="AM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="am">AM</SelectItem>
                        <SelectItem value="pm">PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3 flex flex-col gap-16">
              <div>
                <CustomDate />
              </div>
              <div className="flex flex-col gap-2">
                <Label>
                  Indicate the Session Number of the Week
                  <span className="text-red-500">*</span>
                </Label>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="day-one">First Session (Day 1)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="day-two">Second Session (Day 2)</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-2">
                <Label>
                  Time the session ended<span className="text-red-500">*</span>
                </Label>
                <div className="flex items-center gap-4 w-full max-w-md">
                  <div className="w-1/4">
                    <CustomTime />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="p-6">
                        <SelectValue placeholder="AM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="am">AM</SelectItem>
                        <SelectItem value="pm">PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  className="w-full p-6 cursor-pointer"
                  onClick={() =>
                    setCurrentStep(Math.min(totalSteps, currentStep + 1))
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ReportEdit1;
