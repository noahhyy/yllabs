import { NextResponse } from "next/server";

export function middleware(request) {
  const blockedIPs = ["123.45.67.89"]; // add IPs to block

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] || request.ip || "";

  if (blockedIPs.includes(ip)) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
