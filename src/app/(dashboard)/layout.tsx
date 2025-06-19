"use client";

import "../globals.css";
import React from "react";
import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NavBar from "@/components/dashboardComponents/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = React.useState(false);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <div className="flex h-screen w-full m-0 p-0">
        <AppSidebar />
        <div className="flex flex-col flex-1 m-0 p-0">
          <div className="m-0 p-0">
            <NavBar />
          </div>
          <main className="flex-1 overflow-auto m-0 p-2">{children}</main>
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}