import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "public", "blocked_ips.json");

export async function POST(req) {
  try {
    // Check API key
    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.API_KEY) {
      return new Response("❌ Not allowed! Wrong API key.", { status: 401 });
    }

    // Parse the IP from request body
    const { ip } = await req.json();
    if (!ip) return new Response("❌ Missing IP!", { status: 400 });

    // Read current blocked IPs
    let data = { ips: [] };
    try {
      data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
    } catch (err) {
      console.log("Creating new blocked_ips.json...");
    }

    // Add IP if not already present
    if (!data.ips.includes(ip)) data.ips.push(ip);

    // Save updated list
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));

    return new Response(JSON.stringify({ success: true, bannedIP: ip }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API error:", err);
    return new Response("❌ Server error", { status: 500 });
  }
}
