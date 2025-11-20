import fetch from "node-fetch";

// Get user info
export async function getUser(accessToken: string) {
  return fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  }).then(res => res.json());
}

// Check guild membership
export async function getGuildMember(accessToken: string, guildId: string) {
  return fetch(`https://discord.com/api/users/@me/guilds/${guildId}/member`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  }).then(res => res.json());
}

// Check if user is staff
export function isStaff(member: any) {
  const STAFF_ROLE_ID = "1402405077230157884"; // replace with your staff role ID
  return member.roles?.includes(STAFF_ROLE_ID);
}
