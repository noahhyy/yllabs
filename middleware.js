import { NextResponse } from "next/server";

const blockedIPs = {
  "97.101.137.47": "Spamming detected",
  "185.182.194.240": "GETOUT",
  "98.76.54.32": "Repeated violations of site rules"
};

export function middleware(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.ip ||
    "";

  if (blockedIPs[ip]) {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Access Restricted</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 0;
              background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
              color: white;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }

            .card {
              background: #111;
              padding: 40px;
              border-radius: 12px;
              box-shadow: 0 0 40px rgba(255, 0, 0, 0.15);
              text-align: center;
              max-width: 500px;
              width: 90%;
              border: 1px solid rgba(255, 0, 0, 0.3);
            }

            h1 {
              color: #ff3b3b;
              margin-bottom: 15px;
              font-size: 28px;
              letter-spacing: 1px;
            }

            .reason {
              margin: 20px 0;
              padding: 15px;
              background: rgba(255, 0, 0, 0.08);
              border-radius: 8px;
              font-size: 16px;
            }

            .meta {
              margin-top: 25px;
              font-size: 12px;
              opacity: 0.6;
            }

            .footer {
              margin-top: 30px;
              font-size: 13px;
              opacity: 0.7;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Access Restricted</h1>
            <p>Your access to this site has been revoked.</p>

            <div class="reason">
              <strong>Reason:</strong><br>
              ${blockedIPs[ip]}
            </div>

            <div class="meta">
              IP Address: ${ip}
            </div>

            <div class="footer">
              If you believe this is a mistake, contact the site administrator.
            </div>
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
