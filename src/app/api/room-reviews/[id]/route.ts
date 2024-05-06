import { getRoomReviews } from '@/libs/apis';
import { NextResponse } from 'next/server';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const roomId = params.id;

  try {
    const roomReviews = await getRoomReviews(roomId);

    return NextResponse.json(roomReviews, {
      status: 200,
      statusText: 'Successful',
    });
  } catch (error) {
    console.log('Getting Review Failed', error);
    return new NextResponse('Unable to fetch', { status: 400 });
  }
};
