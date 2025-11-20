export default function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1228] to-[#09182d] text-white px-6">
      <h1 className="text-6xl font-bold mb-6">Welcome to Pulse Labs</h1>
      <p className="text-xl md:text-2xl mb-10 text-white/80 text-center max-w-2xl">
        Manage your community efficiently with smart automation, staff tools, and seamless Discord integration.
      </p>
      <a
        href="/login"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition transform hover:scale-105"
      >
        Staff Login
      </a>
    </div>
  );
}
