import { NextRequest, NextResponse } from "next/server";
import { signIn, getProviders } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (session) {
      return NextResponse.json({
        success: true,
        authenticated: true,
        user: {
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        },
      });
    }

    return NextResponse.json({
      success: true,
      authenticated: false,
      providers: ["github", "google", "credentials"],
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Authentication check failed",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, provider = "credentials" } = body;

    if (provider === "credentials") {
      if (!email || !password) {
        return NextResponse.json(
          { success: false, error: "Email and password are required" },
          { status: 400 }
        );
      }
    }

    // Return success - actual authentication is handled by NextAuth
    return NextResponse.json({
      success: true,
      message: "Login request processed",
      provider,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Login failed",
      },
      { status: 500 }
    );
  }
}
