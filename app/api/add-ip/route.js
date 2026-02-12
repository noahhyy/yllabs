import fs from "fs";
import path from "path";

export async function POST(req) {
  const { ip, reason } = await req.json();
  if (!ip) return new Response("IP is required", { status: 400 });

  const blockedIpsPath = path.join(process.cwd(), "public/blocked_ips.json");
  let blockedIps = [];

  try {
    blockedIps = JSON.parse(fs.readFileSync(blockedIpsPath, "utf-8"));
  } catch (err) {}

  if (!blockedIps.find(e => e.ip === ip)) {
    blockedIps.push({ ip, reason: reason || "Blocked from site" });
    fs.writeFileSync(blockedIpsPath, JSON.stringify(blockedIps, null, 2));
  }

  return new Response(
    JSON.stringify({ success: true, blockedIps }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}
