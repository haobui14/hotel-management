import RoomDetailsClient from "./client";

const RoomDetails = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const { slug } = params;

  return <RoomDetailsClient slug={slug} />;
};

export default RoomDetails;
