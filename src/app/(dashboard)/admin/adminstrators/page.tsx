"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { RouteLoader } from "@/components/shared/RouteLoader";

export default function AdminDashboardPage() {
  const router = useRouter();
  const pathname = usePathname();

  // Store current route when the page is loaded
  useEffect(() => {
    localStorage.setItem("/dashboard/admin/adminstrators/", pathname);
  }, [pathname]);

  // Restore the last route after a refresh
  useEffect(() => {
    const lastPath = localStorage.getItem("dashboard/admin/adminstrators/");
    if (lastPath && lastPath !== pathname) {
      router.push(lastPath);
    }
  }, []);

  return (
    // <RouteLoader allowedRoles={["Admin"]}>
    <div>Admin Administrator Content</div>
    // </RouteLoader>
  );
}
