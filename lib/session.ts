import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

type SessionData = {
  userId?: number;
};

export const getSession = async () => {
  return await getIronSession<SessionData>(cookies(), {
    cookieName: process.env.IRON_SESSION_COOKIE_NAME!,
    password: process.env.IRON_SESSION_PASSWORD!,
  });
};
