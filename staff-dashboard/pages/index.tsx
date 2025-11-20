export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1228] to-[#09182d] text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Pulse Labs</h1>
      <p className="text-xl mb-8 text-white/80">
        Your staff dashboard is ready. Sign in to manage your community.
      </p>
      <a
        href="/login"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
      >
        Sign in with Discord
      </a>
    </div>
  );
}
