// import { NextRequest, NextResponse } from "next/server";
// import { getUserFromToken } from "@/services/authservice";

// const PUBLIC_ROUTES = [
//   "/unauthorized",
//   "/favicon.ico",
//   "/_next",
//   "/static",
//   "/",
// ];

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   if (PUBLIC_ROUTES.some((path) => pathname.startsWith(path))) {
//     return NextResponse.next();
//   }

//   const token = req.cookies.get("accessToken")?.value;
//   if (!token) {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   const user = getUserFromToken(token);
//   if (!user || !user.role) {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   const role = user.role.toLowerCase();

//   if (
//     (pathname.startsWith("/admin") && role !== "admin") ||
//     (pathname.startsWith("/instructor") && role !== "instructor") ||
//     (pathname.startsWith("/director") && role !== "director")
//   ) {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   return NextResponse.next();
// }
