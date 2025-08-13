import { NextRequest, NextResponse } from "next/server";
import sanityClient from "@/libs/sanity";

export async function GET(request: NextRequest) {
  try {
    // Check environment variables
    const envCheck = {
      hasProjectId: !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      hasDataset: !!process.env.NEXT_PUBLIC_SANITY_DATASET,
      hasToken: !!process.env.SANITY_STUDIO_TOKEN,
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      nodeEnv: process.env.NODE_ENV,
      useCdn: process.env.NODE_ENV === "production",
    };

    // Test Sanity connection
    let sanityTest = null;
    let sanityError = null;

    try {
      // Simple query to test connection
      const result = await sanityClient.fetch(
        '*[_type == "hotelRoom"][0..2]{_id, name}'
      );
      sanityTest = {
        success: true,
        roomCount: result?.length || 0,
        sampleRooms: result,
      };
    } catch (error) {
      sanityError = {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : null,
      };
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: envCheck,
      sanityConnection: sanityTest || sanityError,
      status: sanityTest ? "success" : "error",
    });
  } catch (error) {
    console.error("Diagnostic API error:", error);
    return NextResponse.json(
      {
        error: "Diagnostic failed",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
