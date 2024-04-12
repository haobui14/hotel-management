import { Room } from '@/app/models/room';
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
