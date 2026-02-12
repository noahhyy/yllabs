import fs from "fs";
import path from "path";

export async function GET(req) {
  const blockedIpsPath = path.join(process.cwd(), "public/blocked_ips.json");
  let blockedIps = [];

  try {
    blockedIps = JSON.parse(fs.readFileSync(blockedIpsPath, "utf-8"));
  } catch (err) {
    console.error("Error reading blocked_ips.json:", err);
  }

  const { searchParams } = new URL(req.url);
  const ip = searchParams.get("ip");

  const entry = blockedIps.find(e => e.ip === ip);

  return new Response(
    JSON.stringify(entry ? { blocked: true, reason: entry.reason } : { blocked: false }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}
