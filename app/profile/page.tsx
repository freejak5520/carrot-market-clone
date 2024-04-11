import db from "@/lib/db";
import { getSession } from "@/lib/session";
import { notFound, redirect } from "next/navigation";

const getUser = async () => {
  const { userId } = await getSession();

  if (!userId) notFound();

  return db.user.findUnique({
    where: {
      id: userId,
    },
  });
};

const ProfilePage = async () => {
  const user = await getUser();

  const logoutAction = async () => {
    "use server";

    const session = await getSession();
    session.destroy();

    redirect("/login");
  };

  return (
    <div>
      <h1>Welcome {user?.username}</h1>

      <form action={logoutAction}>
        <button type="submit">로그아웃</button>
      </form>
    </div>
  );
};

export default ProfilePage;
