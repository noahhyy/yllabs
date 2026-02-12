import { NextResponse } from "next/server";

export async function middleware(request) {
  // Get visitor IP
  const ipHeader = request.headers.get("x-forwarded-for") || "";
  const ip = ipHeader.split(",")[0].trim();

  // Check blocked IPs from JSON
  const res = await fetch(`${request.nextUrl.origin}/blocked_ips.json`);
  const data = await res.json();
  const blockedIPs = data.ips || [];

  // Naughty visitor? Show fun red page
  if (blockedIPs.includes(ip)) {
    const html = `
      <html>
      <head><title>Nice try.!</title></head>
      <body style="background:#000;color:#f00;font-family:Comic Sans MS,sans-serif;text-align:center;padding-top:100px;">
        <h1>You Have Been Banned.!</h1>
        <p>Hey! Your IP (${ip}) is on the Ban list!</p>
        <p>If you think this is a mistake, ask the admin nicely!</p>
      </body>
      </html>
    `;
    return new NextResponse(html, { status: 403, headers: { "Content-Type": "text/html" } });
  }

  // Otherwise, let them in
  return NextResponse.next();
}

// Run middleware on all paths
export const config = { matcher: "/:path*" };
