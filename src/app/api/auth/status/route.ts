import { NextRequest, NextResponse } from "next/server";
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
        expiresAt: session.expires,
      });
    }

    return NextResponse.json({
      success: true,
      authenticated: false,
      user: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Status check failed",
      },
      { status: 500 }
    );
  }
}
