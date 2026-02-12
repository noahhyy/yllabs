import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "blocked_ips.json");

// Make sure the magic notebook exists
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify({ ips: [] }, null, 2));
}

export async function POST(req) {
  // Read the “letter” from the bot
  const { ip } = await req.json();
  if (!ip) return new Response("Missing IP", { status: 400 });

  // Read current blocked IPs
  let data = { ips: [] };
  try {
    data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  } catch {}

  // Add new IP if not already there
  if (!data.ips.includes(ip)) data.ips.push(ip);

  // Save back to the magic notebook
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
