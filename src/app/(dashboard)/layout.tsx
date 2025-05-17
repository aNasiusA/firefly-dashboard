import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";

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
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-3 bg-lama bg-white">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start"
        >
          <Image
            src="/images/fireflylogo.png"
            alt=""
            width={150}
            height={38}
            className="hidden lg:block"
          />
          <Image
            src="/images/favicon.png"
            alt=""
            width={50}
            height={50}
            className="lg:hidden block"
          />
        </Link>
        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-fireflyGray overflow-scroll"></div>
    </div>
  );
}
