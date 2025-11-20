export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 text-white flex justify-between">
      <h1 className="font-bold">Pulse Labs Staff Dashboard</h1>
      <a href="/logout" className="hover:underline">Logout</a>
    </nav>
  );
}
