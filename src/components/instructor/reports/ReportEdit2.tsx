"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import StudentAttendanceWithPagination from "./StudentAttendanceWithPagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ReportEdit2 = ({ setCurrentStep, currentStep, totalSteps }) => {
  return (
    <>
      <Card className="border-border py-4 gap-3 mb-16 w-full">
        <CardContent className="mt-4">
          <div className="flex justify-between mx-auto w-full px-8">
            {/* LEFT SIDE */}
            <div className="w-1/2 flex flex-col gap-8">
              <div>
                <StudentAttendanceWithPagination />
              </div>
              <div className="w-1/2 ml-auto">
                <Button
                  className="w-full p-6 cursor-pointer"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  variant="outline"
                >
                  Previous
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/3 flex flex-col gap-16">
              <div className="flex flex-col gap-2">
                <Label>
                  Session Topic<span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full p-6 px-4">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Scratch-Movement">
                      Scratch - Movement
                    </SelectItem>
                    <SelectItem value="Scratch-Sound">
                      Scratch - Sound
                    </SelectItem>
                    <SelectItem value="Scratch-Loop">Scratch - Loop</SelectItem>
                    <SelectItem value="Arduino-IR sensor">
                      Arduino-IR sensor
                    </SelectItem>
                    <SelectItem value="Xplore-bot Movement">
                      Xplore-bot Movement
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                  <Label>
                    Student Engagement Level
                    <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-xs text-gray-400">Scale of (1-5)</p>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Slider defaultValue={[1]} max={5} step={1} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{2}</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                  <Label>
                    Was the Learning Objectives Met?
                    <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-xs text-gray-400">Scale of (1-5)</p>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Slider defaultValue={[3]} max={5} step={1} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{2}</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="flex flex-col gap-2">
                <Label>
                  What Practical Exercise was done
                  <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full p-6 px-4">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Scratch-Movement">
                      Scratch - Movement
                    </SelectItem>
                    <SelectItem value="Scratch-Sound">
                      Scratch - Sound
                    </SelectItem>
                    <SelectItem value="Scratch-Loop">Scratch - Loop</SelectItem>
                    <SelectItem value="Arduino-IR sensor">
                      Arduino-IR sensor
                    </SelectItem>
                    <SelectItem value="Xplore-bot Movement">
                      Xplore-bot Movement
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-3">
                <Label>
                  Did you have a Revision Session?
                  <span className="text-red-500">*</span>
                </Label>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
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

export default ReportEdit2;
