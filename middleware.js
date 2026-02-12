import { NextResponse } from "next/server";

export function middleware(request) {
  const blockedIPs = ["192.168.1.216"]; // put IPs here

  // Only use x-forwarded-for (Vercel supports this)
  const ipHeader = request.headers.get("x-forwarded-for") || "";
  const ip = ipHeader.split(",")[0].trim();

  if (blockedIPs.includes(ip)) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
