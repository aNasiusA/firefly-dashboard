import { Card, CardHeader } from "@/components/ui/card";
import { Layers } from "lucide-react";
const ResourcesPage = () => {
  return (
    <Card className="border-[var(--border)] py-4 gap-3">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Layers
            size={20}
            className="text-[var(--card-foreground)]"
          />
          <div className="w-px h-7 bg-[#f1f1f2]" />
          <span className="text-xl font-bold text-[var(--card-foreground)]">
            Resources
          </span>
        </div>
        <hr className="my-1 w-full border-t border-[#f1f1f2]" />
      </CardHeader>
    </Card>
  );
};

export default ResourcesPage;
