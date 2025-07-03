import {
  Card,
  CardContent,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface TrainingCenter {
  name: string;
  location: string;
  directorName: string;
  phoneNumber: string;
  email: string;
  uniqueId: string;
}

interface TrainingCenterCardProps {
  trainingCenterArray: TrainingCenter;
}

const TrainingCenterCard = ({
  trainingCenterArray,
}: TrainingCenterCardProps) => {
  return (
    <Card className="border-[var(--border)] h-full w-full flex flex-col gap-0">
      <CardHeader className="flex-none px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg truncate max-w-[60%] flex items-center gap-2">
            <div className="flex-shrink-0">
              <Image
                src="/favicon.png"
                alt="User avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <span className="truncate">{trainingCenterArray.name}</span>
          </CardTitle>
          <CardAction className="flex-shrink-0">
            <Button size="sm" className="whitespace-nowrap">
              <QrCode className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">QR Code</span>
            </Button>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent className="border-[var(--border)] flex-1 p-4">
        <div className="mb-4">
          <span className="font-semibold">Center Details</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-foreground)] w-[80px] flex-shrink-0">
                Name:
              </span>
              <span className="truncate flex-1">
                {trainingCenterArray.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-foreground)] w-[80px] flex-shrink-0">
                Location:
              </span>
              <span className="truncate flex-1">
                {trainingCenterArray.location}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-foreground)] w-[80px] flex-shrink-0">
                Director:
              </span>
              <span className="truncate flex-1">
                {trainingCenterArray.directorName}
              </span>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-foreground)] w-[80px] flex-shrink-0">
                Phone:
              </span>
              <span className="truncate flex-1">
                {trainingCenterArray.phoneNumber}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-foreground)] w-[80px] flex-shrink-0">
                Email:
              </span>
              <span className="truncate flex-1">
                {trainingCenterArray.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-foreground)] w-[80px] flex-shrink-0">
                ID:
              </span>
              <span className="truncate flex-1">
                {trainingCenterArray.uniqueId}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingCenterCard;
