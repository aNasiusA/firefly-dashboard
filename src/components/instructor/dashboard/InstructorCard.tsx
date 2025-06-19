import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";
import Image from "next/image";

export interface Instructor {
  name: string;
  position: string;
  region: string;
  center: string;
  imageUrl: string;
}

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  return (
    <Card className="flex border-[var(--border)] flex-col w-full p-7 min-h-52 gap-2">
      <div className="w-full text-center">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Hello {instructor.name}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <Image
            src={instructor.imageUrl}
            alt={`Profile picture of ${instructor.name}`}
            width={100}
            height={100}
            priority
            className="w-24 h-24 rounded-full object-cover aspect-square flex-shrink-0"
          />
        </div>
        <CardContent className="flex flex-1 min-w-0 gap-4">
          <div className="flex flex-col text-[var(--accent-foreground)] whitespace-nowrap">
            <span>Name:</span>
            <span>Position:</span>
            <span>Region:</span>
            <span>Center:</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="truncate">{instructor.name}</span>
            <span className="truncate">{instructor.position}</span>
            <span className="truncate">{instructor.region}</span>
            <span className="truncate">{instructor.center}</span>
          </div>
        </CardContent>
        <div className="flex-shrink-0">
          <CardFooter className="px-0 items-end">
            <CardAction>
              <Button
                className="cursor-pointer bg-[var(--secondary)] text-[var(--secondary-foreground)] whitespace-nowrap"
                aria-label="Get QR code"
              >
                <QrCode size={18} />
                Get QR Code
              </Button>
            </CardAction>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default InstructorCard;
