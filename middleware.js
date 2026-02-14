import { NextResponse } from "next/server";

const blockedIPs = {
  "100.48.81.237": "Being a bum",
  "185.182.194.240": "GETOUT",
  "97.101.137.47": "Repeated violations of site rules"
};

export function middleware(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

  if (blockedIPs[ip]) {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Access Restricted</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin:0;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial;">
          <div style="text-align:center;max-width:500px;">
            <h1 style="color:#ff3b3b;">Access Restricted</h1>
            <p>Your access to this site has been revoked.</p>
            <p><strong>Reason:</strong> ${blockedIPs[ip]}</p>
            <p style="opacity:0.6;font-size:12px;">IP: ${ip}</p>
          </div>
        </body>
      </html>
      `,
      {
        status: 403,
        headers: { "content-type": "text/html" }
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*"
};
