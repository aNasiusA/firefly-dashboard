import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NotificationCard from "./NotificationCard";
import { notifications } from "@/services/mockData";

const AllNotifications = () => {
  return (
    <Card className="border-[var(--border)] gap-0 p-2 pt-4">
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle>All Notifications</CardTitle>
      </CardHeader>

      <hr className="w-full border-t border-[#f1f1f2]" />

      <CardContent className="px-4 mt-3 pb-3">
        {notifications.slice(3, 9).map((n) => (
          <NotificationCard notification={n} key={n.id} />
        ))}
      </CardContent>
    </Card>
  );
};

export default AllNotifications;
