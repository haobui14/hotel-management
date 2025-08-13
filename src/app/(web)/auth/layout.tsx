import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Guest Login & Account Access",
  description:
    "Sign in to your luxury hotel account to manage reservations, view booking history, update preferences, and access exclusive member benefits. Create an account for personalized service.",
  keywords: [
    "hotel login",
    "guest account",
    "sign in",
    "user registration",
    "booking management",
    "member benefits",
    "account access",
    "hotel reservation",
  ],
  openGraph: {
    title: "Sign In | Luxury Hotel Management",
    description: "Access your account for personalized hotel service",
    type: "website",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
