import { getServerSession } from 'next-auth';

import { authOptions } from '@/libs/auth';
import { NextResponse } from 'next/server';
import {
  checkReviewExists,
  createReview,
  getUserData,
  updateReview,
} from '@/libs/apis';

export const GET = async (req: Request, res: Response) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Authentication Required', { status: 500 });
  }

  const userId = session.user.id;

  try {
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200, statusText: 'Successful' });
  } catch (error) {
    return new NextResponse('Unable to fetch', { status: 400 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Authentication Required', { status: 500 });
  }

  const { roomId, reviewText, ratingValue } = await req.json();

  if (!roomId || !reviewText || !ratingValue) {
    return new NextResponse('All fields are required', { status: 400 });
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

    return NextResponse.json(data, { status: 200, statusText: 'Successful' });
  } catch (error: any) {
    console.log('Error Updating', error);
    return new NextResponse('Unable to create review', { status: 400 });
  }
};
