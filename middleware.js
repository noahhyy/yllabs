import { NextResponse } from "next/server";

export function middleware(request) {
  const blockedIPs = ["123.45.67.89"]; // put blocked IP here

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.ip ||
    "";

  if (blockedIPs.includes(ip)) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}
