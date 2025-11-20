"use client";

export default function LoginPage() {
  const loginUrl =
    `https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI!)}` +
    `&response_type=code&scope=identify%20email%20guilds.members.read`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1228] to-[#09182d] text-white">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl text-center shadow-2xl">
        <h1 className="text-3xl text-white font-bold mb-6">Staff Login</h1>
        <a
          href={loginUrl}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
        >
          Sign in with Discord
        </a>
      </div>
    </div>
  );
}
