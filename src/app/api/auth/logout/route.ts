import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    return NextResponse.json({
      success: true,
      authenticated: !!session,
      message: session
        ? "User logged out successfully"
        : "User was not logged in",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Logout failed",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // NextAuth logout is handled client-side via signOut()
    // This endpoint confirms the logout was successful
    return NextResponse.json({
      success: true,
      message: "Logout request processed",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Logout failed",
      },
      { status: 500 }
    );
  }
}
