import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const role = req.cookies.get("role")?.value;
  const urlRole = pathname.split("/")[1];

  if (role !== urlRole) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/instructor/:path*", "/director/:path*"],
};
