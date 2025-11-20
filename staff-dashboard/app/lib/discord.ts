export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID!;
export const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET!;
export const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI!;
export const DISCORD_GUILD_ID = "1402405077230157884";

export const STAFF_ROLE_IDS = [
  "1418806274878865442",
  "1418806273088159888"
];

export async function exchangeCode(code: string) {
  const body = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    redirect_uri: DISCORD_REDIRECT_URI,
    code
  });

  const res = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });

  return res.json();
}

export async function getUser(token: string) {
  return fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${token}` }
  }).then(r => r.json());
}

export async function getGuildMember(token: string) {
  return fetch(
    `https://discord.com/api/users/@me/guilds/${DISCORD_GUILD_ID}/member`,
    { headers: { Authorization: `Bearer ${token}` } }
  ).then(r => r.json());
}

export function isStaff(member: any) {
  if (!member.roles) return false;
  return member.roles.some((r: string) => STAFF_ROLE_IDS.includes(r));
}
