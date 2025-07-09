"use client";

import {
  Bell,
  BookUser,
  ClipboardList,
  FileText,
  LayoutDashboard,
  School,
  User,
  UserCog,
  UserRoundCog,
  Users,
  Layers,
  ChartNoAxesColumnIncreasing,
  Building2,
  Hand,
  Users2,
  Power,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useMemo } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useNavigation } from "@/hooks/dashboardNavigation";

const role = localStorage.getItem("user_role");

const menuItems = () => [
  {
    title: "Dashboard",
    url: `/${role}/dashboard`,
    icon: LayoutDashboard,
    visible: ["admin", "instructor", "director"],
  },
  {
    title: "Training Center(s)",
    url: `/${role}/training-centers`,
    icon: School,
    visible: ["admin", "instructor"],
  },
  {
    title: "Profile",
    url: `/${role}/profile`,
    icon: User,
    visible: ["admin", "instructor"],
  },
  {
    title: "Instructors",
    url: `/${role}/instructors`,
    icon: Users,
    visible: ["admin"],
  },
  {
    title: "Directors",
    url: `/${role}/directors`,
    icon: UserCog,
    visible: ["admin"],
  },
  {
    title: "Volunteers",
    url: `/${role}/volunteers`,
    icon: UserCog,
    visible: ["admin"],
  },
  {
    title: "Student Management",
    url: `/${role}/students`,
    icon: Users2,
    visible: ["admin", "director"],
  },
  {
    title: "Administrators",
    url: `/${role}/administrators`,
    icon: UserRoundCog,
    visible: ["admin"],
  },
  {
    title: "Assessments",
    url: `/${role}/assessments`,
    icon: ClipboardList,
    visible: ["admin", "instructor", "director"],
  },
  {
    title: "Reports",
    url: `/${role}/reports`,
    icon: FileText,
    visible: ["admin", "instructor", "director"],
  },
  {
    title: "PhoneBook",
    url: `/${role}/phonebook`,
    icon: BookUser,
    visible: ["admin"],
  },
  {
    title: "Resources",
    url: `/${role}/resources`,
    icon: Layers,
    visible: ["admin", "instructor"],
  },
  {
    title: "Notifications",
    url: `/${role}/notifications`,
    icon: Bell,
    visible: ["admin", "instructor", "director"],
  },
  {
    title: "Center Profile",
    url: `/${role}/center-profile`,
    icon: Building2,
    visible: ["admin", "director"],
  },
  {
    title: "Volunteer Profile",
    url: `/${role}/volunteer-profile`,
    icon: Hand,
    visible: ["admin", "director"],
  },
  {
    title: "Analytics",
    url: `/${role}/analytics`,
    icon: ChartNoAxesColumnIncreasing,
    visible: ["admin", "instructor", "director"],
  },
  {
    title: "Logout",
    url: `/${role}/logout`,
    icon: Power,
    visible: ["admin", "instructor", "director"],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const { navigate, isNavigating } = useNavigation();

  const isActive = (url: string) => pathname === url;

  const handleClick = (url: string, label: string) => {
    navigate({
      href: url,
      loadingMessage: `Loading ${label}...`,
      successMessage: `${label} loaded successfully`,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user_role");
    navigate({
      href: "/login",
      loadingMessage: "Logging out...",
      successMessage: "Logout successful",
      errorMessage: "Logout failed. Please try again.",
    });
  };

  const { otherItems, logoutItem } = useMemo(() => {
    const allItems = menuItems();
    const visibleItems = allItems.filter((item) => item.visible.includes(role));

    const logout = visibleItems.find((item) => item.title === "Logout");
    const others = visibleItems.filter((item) => item.title !== "Logout");

    return {
      otherItems: others,
      logoutItem: logout,
    };
  }, []);

  const renderMenuItem = (item) => (
    <SidebarMenuItem key={item.title}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarMenuButton
              onClick={() => handleClick(item.url, item.title)}
              disabled={isNavigating}
              className={
                isActive(item.url) ? "bg-fireflyOrange text-white" : ""
              }
            >
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="bg-gray-800 text-white"
            hidden={state !== "collapsed"}
          >
            {item.title}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </SidebarMenuItem>
  );

  const renderLogoutItem = (item) => (
    <SidebarMenuItem key={item.title}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarMenuButton
              onClick={handleLogout}
              disabled={isNavigating}
              className={
                isActive(item.url) ? "bg-fireflyOrange text-white" : ""
              }
            >
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="bg-gray-800 text-white"
            hidden={state !== "collapsed"}
          >
            {item.title}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </SidebarMenuItem>
  );

  return (
    <Sidebar collapsible="icon" variant="inset" className="pt-1">
      <SidebarHeader className="h-12 w-full justify-center">
        <div
          className={`flex justify-center ${
            isNavigating ? "pointer-events-none opacity-50" : "cursor-pointer"
          }`}
          onClick={() => handleClick("/", "Home")}
        >
          <Image
            src="/auth.image.png"
            alt="App Logo"
            width={133}
            height={27}
            priority
            className="max-w-full h-auto w-auto max-h-[27px]"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="scrollbar-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-3">
              {otherItems.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {logoutItem && (
          <SidebarGroup>
            <SidebarGroupLabel>Other</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{renderLogoutItem(logoutItem)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
