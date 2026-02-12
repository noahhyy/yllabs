import { NextResponse } from "next/server";

export function middleware(request) {
  // list your blocked IPs
  const blockedIPs = ["97.101.137.47"]; // replace with your public IP

  // Get client IP from x-forwarded-for header
  const ipHeader = request.headers.get("x-forwarded-for") || "";
  const ip = ipHeader.split(",")[0].trim();

  console.log("Visitor IP:", ip); // for debugging

  if (blockedIPs.includes(ip)) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
