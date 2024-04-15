import { Room } from '@/models/room';
import sanityClient from './sanity';
import * as queries from './sanityQueries';

export const getFeaturedRoom = async () => {
  const result = await sanityClient.fetch<Room>(
    queries.getFeaturedRoomQuery,
    {},
    { cache: 'no-cache' }
  );
  return result;
};

export const getRooms = async () => {
  const result = await sanityClient.fetch<Room[]>(
    queries.getRoomsQuery,
    {},
    { cache: 'no-cache' }
  );
  return result;
};

export const getRoom = async (slug: string) => {
  const result = await sanityClient.fetch<Room>(
    queries.getRoom,
    { slug },
    { cache: 'no-cache' }
  );
  return result;
};
