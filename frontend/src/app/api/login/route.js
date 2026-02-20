import { NextResponse } from "next/server"

const ADMIN_EMAIL = "admin@example.com"
const ADMIN_PASSWORD = "123456"

export async function POST(req) {
  const { email, password } = await req.json()

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set("auth", "true", { httpOnly: true })
    return response
  }

  return NextResponse.json({ error: "Invalid" }, { status: 401 })
}