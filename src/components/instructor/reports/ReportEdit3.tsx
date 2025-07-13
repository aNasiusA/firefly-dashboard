"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

const ReportEdit3 = ({ setCurrentStep, currentStep, totalSteps }) => {
  return (
    <>
      <Card className="border-border py-4 gap-3 mb-16 w-full">
        <CardContent className="mt-4">
          <div className="flex justify-between mx-auto w-full px-8">
            {/* LEFT SIDE */}
            <div className="w-[45%] flex flex-col gap-8">
              <div className="grid w-full gap-3">
                <Label>
                  Challenges the Learners Faced During Session
                  <span className="text-red-500">*</span>
                </Label>
                <Textarea placeholder="" id="message" className="h-36" />
                <p className="text-xs text-gray-400">
                  If there were no difficulties just say N/A
                </p>
              </div>
              <div className="grid w-full gap-3">
                <Label>
                  Challenges You Faced During Session
                  <span className="text-red-500">*</span>
                </Label>
                <Textarea placeholder="" id="message" className="h-36" />
                <p className="text-xs text-gray-400">
                  If there were no difficulties just say N/A
                </p>
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
            <div className="w-[45%] flex flex-col gap-16">
              <div className="grid w-full gap-3">
                <Label>Support or Resources Needed</Label>
                <Textarea placeholder="" id="message" className="h-36" />
              </div>
              <div className="grid w-full gap-3">
                <Label>
                  Suggestions for Improvement
                  <span className="text-red-500">*</span>
                </Label>
                <Textarea placeholder="" id="message" className="h-36" />
              </div>
              <div>
                <Button className="w-full p-6 cursor-pointer">Submit</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ReportEdit3;
