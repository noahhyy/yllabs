import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;

  if (!code) return res.status(400).send("No code provided");

  // Exchange code for access token
  const data = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID!,
      client_secret: process.env.DISCORD_CLIENT_SECRET!,
      code,
      grant_type: "authorization_code",
      redirect_uri: process.env.DISCORD_REDIRECT_URI!,
      scope: "identify email guilds.members.read",
    }),
  }).then(r => r.json());

  if (data.error) return res.status(400).send("Invalid token");

  // Redirect to staff dashboard after login
  res.setHeader("Set-Cookie", `token=${data.access_token}; HttpOnly; Path=/; Secure`);
  res.redirect("/staff");
}
