import { getSession } from "@/lib/session";

const ProfilePage = async () => {
  const { userId } = await getSession();

  return <div>use id: {userId}</div>;
};

export default ProfilePage;
