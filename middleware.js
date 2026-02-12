import { NextResponse } from "next/server";

export async function middleware(req) {
  const ip = req.ip || req.headers.get("x-forwarded-for") || "";

  // Build API URL
  const url = `${req.nextUrl.origin}/api/check-ip?ip=${ip}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.blocked) {
      const reason = data.reason || "Blocked from site";
      return new NextResponse(
        `<html>
          <head>
            <title>Blocked</title>
            <style>
              body { background: #000; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; text-align: center; }
              h1 { color: red; font-size: 3rem; margin-bottom: 1rem; }
              p { font-size: 1.2rem; }
            </style>
          </head>
          <body>
            <div>
              <h1>Access Denied</h1>
              <p>${reason}</p>
            </div>
          </body>
        </html>`,
        { status: 403, headers: { "content-type": "text/html" } }
      );
    }
  } catch (err) {
    console.error("Error checking IP:", err);
  }

  return NextResponse.next();
}
