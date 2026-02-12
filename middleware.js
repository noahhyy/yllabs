import { NextResponse } from "next/server";

export async function middleware(req) {
  const ip = req.ip || req.headers.get("x-forwarded-for") || "";

  // Build API URL
  const protocol = req.nextUrl.protocol;
  const host = req.nextUrl.host;
  const url = `${protocol}//${host}/api/check-ip?ip=${ip}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.blocked) {
      const reason = data.reason || "Blocked from site";
      return new NextResponse(
        `<h1>Access Denied</h1><p>${reason}</p>`,
        { status: 403, headers: { "content-type": "text/html" } }
      );
    }
  } catch (err) {
    console.error("Error checking IP:", err);
  }

  return NextResponse.next();
}
