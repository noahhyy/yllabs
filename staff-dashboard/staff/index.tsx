import { useEffect, useState } from "react";
import { getUser } from "../lib/discord";

export default function StaffDashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find(row => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) return;

    getUser(token).then(setUser);
  }, []);

  if (!user) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1228] to-[#09182d] text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome, {user.username}!</h1>
      <p className="mb-6 text-white/80">ID: {user.id}</p>
      <p className="mb-6 text-white/80">Email: {user.email}</p>
    </div>
  );
}
