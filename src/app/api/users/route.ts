import { getServerSession } from 'next-auth';

import { authOptions } from '@/libs/auth';
import { NextResponse } from 'next/server';
import { getUserData } from '@/libs/apis';

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
