import type { Metadata } from "next";
import { getRoom } from "@/libs/apis";
import RoomDetailsClient from "./client";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  try {
    const room = await getRoom(slug);

    return {
      title: `${room.name} | Luxury Hotel Room Details & Booking`,
      description: `${room.description.substring(0, 155)}... Book this ${room.type.toLowerCase()} room with premium amenities and exceptional service.`,
      keywords: [
        room.name.toLowerCase(),
        room.type.toLowerCase(),
        "hotel room",
        "luxury accommodation",
        "room booking",
        "premium amenities",
      ],
      openGraph: {
        title: `${room.name} | Luxury Hotel`,
        description: room.description,
        images: room.images?.map((img) => img.url) || [],
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Hotel Room Details | Luxury Accommodations",
      description:
        "Discover our premium hotel room with luxury amenities and exceptional service.",
    };
  }
}

const RoomDetails = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const { slug } = params;

  return <RoomDetailsClient slug={slug} />;
};

export default RoomDetails;
