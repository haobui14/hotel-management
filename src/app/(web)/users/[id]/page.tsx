import type { Metadata } from "next";
import UserDetailsClient from "./client";

export const metadata: Metadata = {
  title: "User Profile | Account Management & Booking History",
  description:
    "Manage your hotel account, view booking history, update personal information, and access your reservation details. Personalized service for our valued guests.",
  keywords: [
    "user profile",
    "account management",
    "booking history",
    "guest account",
    "reservation details",
    "personal information",
    "hotel preferences",
  ],
  openGraph: {
    title: "User Profile | Luxury Hotel Management",
    description: "Manage your account and view your luxury hotel experience",
    type: "website",
  },
};

const UserDetails = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const { id: userId } = params;

  return <UserDetailsClient userId={userId} />;
};

export default UserDetails;
