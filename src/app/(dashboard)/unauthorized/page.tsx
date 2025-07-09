"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

const UnauthorizedPage = () => {
  const [timer, setTimer] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (timer === 0) {
      router.back();
      return;
    }

    const timeout = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer, router]);

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="border-[var(--border)] p-24">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-3xl text-red-500">Unauthorized</h1>
          <p className="text-gray-500">
            You do not have permission to access this page.
          </p>
          <p>You will be redirected in {timer} seconds</p>
        </div>
      </Card>
    </div>
  );
};

export default UnauthorizedPage;
