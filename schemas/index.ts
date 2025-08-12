import account from "./account";
import booking from "./booking";
import hotelRoom from "./hotelRoom";
import review from "./review";
import session from "./session";
import user from "./user";
import verificationToken from "./verificationToken";

export const schemaTypes = [
  // NextAuth schemas
  user,
  account,
  session,
  verificationToken,
  // Hotel management schemas
  hotelRoom,
  booking,
  review,
];
