import { getRoomReviews } from "@/libs/apis";
import { NextResponse } from "next/server";
import sanityClient from "@/libs/sanity";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id: roomIdOrSlug } = await params;

  try {
    // First, check if the ID is actually a slug and get the room _id
    let roomId = roomIdOrSlug;

    // If the ID looks like a slug (contains hyphens), fetch the actual room ID
    if (roomIdOrSlug.includes("-")) {
      const room = await sanityClient.fetch(
        `*[_type == "hotelRoom" && slug.current == $slug][0] { _id }`,
        { slug: roomIdOrSlug }
      );

      if (room?._id) {
        roomId = room._id;
      }
    }

    const roomReviews = await getRoomReviews(roomId);

    return NextResponse.json(roomReviews, {
      status: 200,
      statusText: "Successful",
    });
  } catch (error) {
    console.error("Getting Review Failed", error);
    return new NextResponse("Unable to fetch", { status: 400 });
  }
};
