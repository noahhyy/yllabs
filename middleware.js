import { NextResponse } from "next/server";

const blockedIPs = {
  "97.101.137.47": "Spamming detected"
};

export function middleware(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.ip ||
    "";

  if (blockedIPs[ip]) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*"
};
