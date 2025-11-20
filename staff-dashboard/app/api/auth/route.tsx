import { NextResponse } from "next/server";
import { exchangeCode, getUser, getGuildMember, isStaff } from "@/lib/discord";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (!code) return NextResponse.redirect("/login?error=no_code");

  const token = await exchangeCode(code);
  if (token.error) return NextResponse.redirect("/login?error=invalid_token");

  const user = await getUser(token.access_token);
  const member = await getGuildMember(token.access_token);

  if (member.message === "Unknown Guild") return NextResponse.redirect("/login?error=not_in_server");
  if (!isStaff(member)) return NextResponse.redirect("/login?error=not_staff");

  const res = NextResponse.redirect("/staff");
  res.cookies.set("token", token.access_token, { httpOnly: true, secure: true, path: "/" });

  return res;
}
