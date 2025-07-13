import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

const CustomTime = () => {
  const [time, setTime] = useState("");

  const formatTimeInput = (value: string): string => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length === 0) return "";
    if (numbers.length <= 2) return numbers;
    const hours = numbers.slice(0, 2);
    const minutes = numbers.slice(2, 4);

    return `${hours}:${minutes}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTimeInput(e.target.value);
    setTime(formatted);
  };

  return (
    <div className="w-full">
      <Input placeholder="HH:MM" value={time} onChange={handleChange} />
    </div>
  );
};

export default CustomTime;
