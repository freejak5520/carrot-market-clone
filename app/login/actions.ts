"use server";

import {
  EMAIL_ERROR,
  EMAIL_REQUIRED_ERROR,
  EMAIL_TYPE_ERROR,
  LOGIN_FAIL_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_ERROR,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
  PASSWORD_REQUIRED_ERROR,
  PASSWORD_TYPE_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import { getSession } from "@/lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

const checkAuthenticate = async (
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
  ctx: z.RefinementCtx,
) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      password: true,
    },
  });

  if (!user) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: LOGIN_FAIL_ERROR,
      path: ["password"],
    });
    return z.NEVER;
  }

  if (!user.password || !(await bcrypt.compare(password, user.password))) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: LOGIN_FAIL_ERROR,
      path: ["password"],
    });
    return z.NEVER;
  }

  const session = await getSession();

  session.userId = user.id;
  await session.save();

  return true;
};

const loginSchema = z
  .object({
    email: z
      .string({
        invalid_type_error: EMAIL_TYPE_ERROR,
        required_error: EMAIL_REQUIRED_ERROR,
      })
      .email(EMAIL_ERROR),
    password: z
      .string({
        invalid_type_error: PASSWORD_TYPE_ERROR,
        required_error: PASSWORD_REQUIRED_ERROR,
      })
      .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR),
    // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
  })
  .superRefine(checkAuthenticate);

export const login = async (_: any, formData: FormData) => {
  const formDataObject = Object.fromEntries(formData.entries());

  const parsed = await loginSchema.safeParseAsync(formDataObject);

  if (!parsed.success) {
    return parsed.error.flatten();
  }

  redirect("/profile");
};
