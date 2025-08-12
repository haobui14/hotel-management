import { NextRequest, NextResponse } from "next/server";
import sanityClient from "@/libs/sanity";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await sanityClient.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user in Sanity
    const newUser = await sanityClient.create({
      _type: "user",
      name,
      email,
      password: hashedPassword,
      isAdmin: false,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Sign up error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Sign up failed",
      },
      { status: 500 }
    );
  }
}
