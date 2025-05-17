import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`h-screen flex`}>
      {/* RIGHT NAVIGATION */}
      <nav className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-lama bg-white overflow-y-auto scrollbar-hidden">
        <div className="sticky top-0 bg-white shadow-sm z-20 p-4 h-15 w-full flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start"
          >
            <Image
              src="/images/fireflylogo.png"
              alt="Firefly Logo"
              width={150}
              height={38}
              className="hidden lg:block"
            />
            <Image
              src="/images/favicon.png"
              alt="Favicon"
              width={50}
              height={50}
              className="lg:hidden block"
            />
          </Link>
        </div>
        <div className="px-4 pb-4">
          <Menu />
        </div>
      </nav>

      {/* LEFT CONTENT */}
      <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-fireflyGray">
        <NavBar />
        {/* {children} */}
      </main>
    </div>
  );
}
