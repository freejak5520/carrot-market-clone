"use server";

import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const GET = async () => {
  const session = await getSession();

  session.destroy();

  redirect("/login");
};
