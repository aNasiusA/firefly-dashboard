import { role } from "@/lib/data";
import Link from "next/link";
import {
  Bell,
  BookUser,
  ClipboardList,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  School,
  User,
  UserCog,
  UserRoundCog,
  Users,
} from "lucide-react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <LayoutDashboard size={20} />,
        label: "Dashboard",
        href: `/${role}`,
        visible: ["admin"],
      },
      {
        icon: <School size={20} />,
        label: "Training Center(s)",
        href: `/${role}/centers`,
        visible: ["admin"],
      },
      {
        icon: <User size={20} />,
        label: "Profile",
        href: `/${role}/profile`,
        visible: ["admin"],
      },
      {
        icon: <Users size={20} />,
        label: "Instructors",
        href: `/${role}/instructors`,
        visible: ["admin"],
      },
      {
        icon: <UserCog size={20} />,
        label: "Directors",
        href: `/${role}/directors`,
        visible: ["admin"],
      },
      {
        icon: <UserCog size={20} />,
        label: "Volunteers",
        href: `/${role}/volunteers`,
        visible: ["admin"],
      },
      {
        icon: <GraduationCap size={20} />,
        label: "Student Management",
        href: `/${role}/students`,
        visible: ["admin"],
      },
      {
        icon: <UserRoundCog size={20} />,
        label: "Administrators",
        href: `/${role}/administrators`,
        visible: ["admin"],
      },
      {
        icon: <ClipboardList size={20} />,
        label: "Assessments",
        href: `/${role}/assessments`,
        visible: ["admin"],
      },
      {
        icon: <FileText size={20} />,
        label: "Reports",
        href: `/${role}/reports`,
        visible: ["admin"],
      },
      {
        icon: <Bell size={20} />,
        label: "Notifications",
        href: `/${role}/notifications`,
        visible: ["admin"],
      },
      {
        icon: <BookUser size={20} />,
        label: "PhoneBook",
        href: `/${role}/phonebook`,
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <LogOut size={20} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "instructor", "director", "student"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-2 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-2">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-600 py-2 md:px-2 rounded-md font-semibold transition-all duration-300 hover:bg-fireflyOrange hover:text-black"
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
