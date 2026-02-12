import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    // Get visitor IP
    const ipHeader = request.headers.get("x-forwarded-for") || "";
    const ip = ipHeader.split(",")[0].trim();

    // Fetch the naughty list from public folder
    const res = await fetch(`${request.nextUrl.origin}/blocked_ips.json`);
    if (!res.ok) return NextResponse.next(); // if JSON not found, let them in
    const data = await res.json();
    const blockedIPs = data.ips || [];

    // If the visitor is naughty
    if (blockedIPs.includes(ip)) {
      const html = `
        <html>
        <head><title>Uh-oh!</title></head>
        <body style="background:#000;color:#f00;font-family:Comic Sans MS,sans-serif;text-align:center;padding-top:100px;">
          <h1>You've Been Banned!!</h1>
          <p>Hey! Your IP (${ip}) is on our ban list.</p>
          <p>If you think this is a mistake, Contact us.!</p>
        </body>
        </html>
      `;
      return new NextResponse(html, { status: 403, headers: { "Content-Type": "text/html" } });
    }

    // Otherwise, let them in
    return NextResponse.next();

  } catch (err) {
    // If something breaks, don’t block anyone
    console.error("Middleware error:", err);
    return NextResponse.next();
  }
}

// Run middleware on all paths
export const config = { matcher: "/:path*" };
