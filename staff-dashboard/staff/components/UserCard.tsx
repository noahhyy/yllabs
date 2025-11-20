export default function UserCard({ user }: { user: any }) {
  return (
    <div className="bg-white/10 border border-white/20 p-4 rounded-xl mb-4">
      <h2 className="font-semibold text-lg">{user.username}</h2>
      <p className="text-white/80">ID: {user.id}</p>
      <p className="text-white/80">Email: {user.email}</p>
    </div>
  );
}
