import { cookies } from "next/headers";
import { getUser, getGuildMember } from "@/lib/discord";

export default async function StaffPage() {
  const token = cookies().get("token")?.value;
  if (!token) return <div className="text-white mt-10 text-center">Not logged in.</div>;

  const user = await getUser(token);
  const member = await getGuildMember(token);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#0d1228] to-[#09182d] text-white">
      <h1 className="text-4xl font-bold mb-6">Staff Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Account Info</h2>
          <img
            className="w-24 h-24 rounded-full"
            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          />
          <p className="mt-3 text-xl">{user.username}#{user.discriminator}</p>
          <p className="opacity-75">{user.email}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Server Roles</h2>
          {member.roles.map((r: string) => (
            <p key={r} className="opacity-80">{r}</p>
          ))}
        </div>

      </div>
    </div>
  );
}
