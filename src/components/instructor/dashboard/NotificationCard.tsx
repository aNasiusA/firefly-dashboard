"use client";
import { useState } from "react";
import { MailWarning, MailOpen, ChevronDown, ChevronUp } from "lucide-react";

export interface Notification {
  id: string;
  title: string;
  date: string;
  time: string;
  content: string;
}

interface NotificationCardProps {
  notification: Notification;
}
const NotificationCard = ({ notification }: NotificationCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
    if (!hasBeenOpened) setHasBeenOpened(true);
  };

  return (
    <div
      onClick={toggle}
      role="button"
      aria-expanded={isOpen}
      aria-label={`Notification: ${notification.title}`}
      className="shadow-md flex flex-col cursor-pointer bg-white rounded-md w-full p-2 sm:p-4 mt-2"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span className="flex-1 min-w-0 self-center text-ellipsis overflow-hidden whitespace-nowrap">
          {notification.title}
        </span>
        <div className="flex items-center justify-center gap-2">
          {hasBeenOpened ? (
            <MailOpen size={16} />
          ) : (
            <MailWarning size={16} className="text-orange-500" />
          )}
          <span className="text-sm whitespace-nowrap">{`${notification.date}, ${notification.time}`}</span>
          {isOpen ? (
            <ChevronUp size={25} className="text-fireflyOrange" />
          ) : (
            <ChevronDown size={25} className="text-fireflyOrange" />
          )}
        </div>
      </div>
      {isOpen && (
        <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 transition-all duration-200 ease-in-out">
          {notification.content}
        </p>
      )}
    </div>
  );
};

export default NotificationCard;
