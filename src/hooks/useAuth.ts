import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated" && !!session;
  const isLoading = status === "loading";
  const user = session?.user || null;

  return {
    user,
    isAuthenticated,
    isLoading,
    status,
  };
};
