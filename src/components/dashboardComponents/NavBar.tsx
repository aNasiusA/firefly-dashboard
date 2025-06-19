import { useState, useEffect } from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Search, Minimize, Maximize, Bell } from "lucide-react";
import toast from "react-hot-toast";
import { SidebarTrigger } from "../ui/sidebar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { useNavigation } from "@/hooks/dashboardNavigation";
import { role } from "@/services/mockData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const NavBar = () => {
  const { navigate } = useNavigation();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        toast.error(`Error entering fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement your search functionality
      toast.loading(`Searching for: ${searchQuery}`, { duration: 3000 });
    }
  };

  const handleNavigation = (url: string, title: string) => {
    navigate({
      href: `/${role}${url}`,
      loadingMessage: `Loading ${title}...`,
      successMessage: `${title} loaded successfully`,
    });
  };

  return (
    <NavigationMenu className="w-full h-12 bg-[var(--sidebar)] text-[var(--sidebar-foreground)]">
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        <form onSubmit={handleSearch} className="hidden md:flex items-center">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[300px] shadow-none pl-8 pr-2 h-7 transition-colors"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center">
        {/* Fullscreen button */}
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleFullscreenToggle}
                variant="ghost"
                size="icon"
                className="w-9 h-9 hover:bg-gray-100 hover:text-fireflyOrange transition-colors"
              >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-gray-800 text-white">
              <p>{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Notification bell */}
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 hover:bg-gray-100 hover:text-fireflyOrange transition-colors"
                onClick={() =>
                  handleNavigation("/notifications", "Notifications")
                }
              >
                <Bell size={20} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-gray-800 text-white">
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ModeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-gray-800 text-white">
              <p>Toggle Theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"link"}
                aria-label="User profile"
                className="p-1 rounded-full cursor-pointer hover:ring-2 hover:ring-fireflyOrange transition-all"
              >
                <Image
                  src="/Avatar.png"
                  alt="User avatar"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-gray-800 text-white">
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </NavigationMenu>
  );
};

export default NavBar;
