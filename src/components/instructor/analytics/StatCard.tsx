"use client";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, TrendingUpDown } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import Image from "next/image";

export interface Statistic {
  title: string;
  iconUrl: string;
  value: number;
  current: number;
  previous: number;
  data: number[];
  color: string;
}

interface StatCardProps {
  statisticObject: Statistic;
}

const StatCard = ({ statisticObject }: StatCardProps) => {
  const chartData = statisticObject.data.map((value, index) => ({
    value,
    index,
  }));

  const getChangeStats = (current: number, previous: number) => {

    if (previous === 0) {
      return {
        percent: 100,
        isPositive: true,
        isEqual: false,
      };
    }

    if (previous === current) {
      return {
        percent: 0,
        isPositive: true,
        isEqual: true,
      };
    }

    const percent = ((current - previous) / previous) * 100;
    return {
      percent: Math.abs(parseFloat(percent.toFixed(2))),
      isPositive: percent >= 0,
      isEqual: false,
    };
  };

  const stats = getChangeStats(
    statisticObject.current,
    statisticObject.previous
  );

  return (
    <Card
      className={`border-[var(--border)] h-52 relative overflow-hidden bg-card`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${statisticObject.color} 0%, transparent 70%)`,
        }}
      />
      <CardContent className="relative h-full p-6 flex flex-col">
        <div className="flex items-start gap-4 h-full">
          <div className="flex flex-col h-full justify-between">
            <div>
              <Image
                src={statisticObject.iconUrl}
                alt=""
                width={24}
                height={24}
                className="mb-2"
              />
              <h3 className="text-sm font-medium text-muted-foreground">
                {statisticObject.title}
              </h3>
              <p className="text-2xl font-bold mt-1">{statisticObject.value}</p>
            </div>
          </div>

          <div className="flex-grow h-full ml-auto min-w-[100px] flex items-center justify-center">
            <div className="h-1/2 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={statisticObject.color}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center mt-auto pt-2">
          <div
            className={`flex items-center gap-2 rounded-md p-0.5 px-2 text-xs ${
              stats.isEqual
                ? "bg-[#9e9e9e] text-white"
                : stats.isPositive
                ? "bg-green-500 text-green-900"
                : "bg-red-500 text-red-900"
            }`}
          >
            {stats.isEqual ? (
              <TrendingUpDown size={16} />
            ) : stats.isPositive ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            {stats.isEqual ? "" : stats.isPositive ? "+" : "-"}
            {stats.percent}%
          </div>
          <div className="text-xs text-muted-foreground">
            <span>vs. last month</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
