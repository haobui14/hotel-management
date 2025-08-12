import { getServerSession } from "next-auth";

import { authOptions } from "@/libs/auth";
import { NextResponse } from "next/server";
import {
  checkReviewExists,
  createReview,
  getUserData,
  updateReview,
} from "@/libs/apis";
import sanityClient from "@/libs/sanity";

export const GET = async (req: Request) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Authentication Required", { status: 500 });
  }

  const userId = session.user.id;

  try {
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200, statusText: "Successful" });
  } catch (error) {
    return new NextResponse("Unable to fetch", { status: 400 });
  }
};

export const POST = async (req: Request) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Authentication Required", { status: 500 });
  }

  const { roomId, reviewText, ratingValue } = await req.json();

  if (!roomId || !reviewText || !ratingValue) {
    return new NextResponse("All fields are required", { status: 400 });
  }

  const userId = session.user.id;

  try {
    //Check if every fields existed
    const alreadyExists = await checkReviewExists(userId, roomId);

    let data;

    if (alreadyExists) {
      data = await updateReview({
        reviewId: alreadyExists._id,
        reviewText,
        userRating: ratingValue,
      });
    } else {
      data = await createReview({
        hotelRoomId: roomId,
        reviewText,
        userId,
        userRating: ratingValue,
      });
    }

    return NextResponse.json(data, { status: 200, statusText: "Successful" });
  } catch (error: any) {
    return new NextResponse("Unable to create review", { status: 400 });
  }
};

export const PUT = async (req: Request) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Authentication Required", { status: 401 });
  }

  const userId = session.user.id;

  try {
    const body = await req.json();
    const { image, name, about } = body;

    // Update user in Sanity
    const updatedUser = await sanityClient
      .patch(userId)
      .set({
        ...(image && { image }),
        ...(name && { name }),
        ...(about !== undefined && { about }),
      })
      .commit();

    return NextResponse.json(updatedUser, {
      status: 200,
      statusText: "Profile Updated Successfully",
    });
  } catch (error: any) {
    return new NextResponse("Unable to update profile", { status: 400 });
  }
};
