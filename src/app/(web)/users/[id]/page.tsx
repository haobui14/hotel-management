import UserDetailsClient from "./client";

const UserDetails = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const { id: userId } = params;

  return <UserDetailsClient userId={userId} />;
};

export default UserDetails;
