import { NextResponse } from "next/server";

const blockedIPs = {
  "123.123.123.123": "Spamming detected",
  "111.222.333.444": "Abuse"
};

export function middleware(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.ip ||
    "";

  if (blockedIPs[ip]) {
    return new NextResponse(
      `
      <html>
        <head>
          <title>Access Denied</title>
          <style>
            body {
              margin: 0;
              background: black;
              color: white;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              text-align: center;
            }
            h1 { color: red; font-size: 3rem; margin-bottom: 1rem; }
            p { font-size: 1.2rem; }
          </style>
        </head>
        <body>
          <div>
            <h1>Access Denied</h1>
            <p>${blockedIPs[ip]}</p>
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
