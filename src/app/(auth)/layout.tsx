import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firefly IO Dashboard",
  description: "Dashboard for Firefly IO",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex h-screen ${plusJakartaSans.className}`}>
      {/* Main Image */}
      <div className="hidden md:block w-1/2">
        <Image
          src="/image-login.jpg"
          alt=""
          priority
          width={2048}
          height={1148}
          className="w-full object-cover h-full"
        />
      </div>

      {/* Right:login, forgot password, etc */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
          <Toaster toastOptions={{ duration: 2000 }} position="top-center" />
          {children}
      </div>
    </div>
  );
}
