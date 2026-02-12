import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to your blocked IPs JSON
const blockedIpsPath = path.join(process.cwd(), "public/blocked_ips.json");

// Load blocked IPs
function getBlockedIps() {
  try {
    const data = fs.readFileSync(blockedIpsPath, "utf-8");
    return JSON.parse(data); // Example: [{ "ip": "1.2.3.4", "reason": "spamming" }]
  } catch (err) {
    console.error("Error reading blocked_ips.json:", err);
    return [];
  }
}

export function middleware(req) {
  const blockedIps = getBlockedIps();

  // Get visitor IP
  const ip = req.ip || req.headers.get("x-forwarded-for") || "";

  // Find if IP is blocked
  const blockedEntry = blockedIps.find(entry => entry.ip === ip);

  if (blockedEntry) {
    // Show a friendly message explaining why they are blocked
    const reason = blockedEntry.reason || "You are blocked from this site.";
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

  // Otherwise continue normally
  return NextResponse.next();
}
