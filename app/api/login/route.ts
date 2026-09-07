import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username & password wajib diisi" },
        { status: 400 }
      );
    }

    const { data: user, error } = await supabase
      .from("admin_user")
      .select("username, password, role")
      .eq("username", username)
      .single();

    if (error || !user) {
      return NextResponse.json(
        { success: false, message: "Username tidak ditemukan" },
        { status: 401 }
      );
    }

    if (user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Password salah" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        role: user.role,
        message: `Berhasil login sebagai ${user.role.toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Login Error:", err);

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
