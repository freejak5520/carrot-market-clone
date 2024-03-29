"use server";

import {
  EMAIL_ERROR,
  EMAIL_REQUIRED_ERROR,
  EMAIL_TYPE_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_ERROR,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
  PASSWORD_REQUIRED_ERROR,
  PASSWORD_TYPE_ERROR,
} from "@/lib/constants";
import { z } from "zod";

const loginSchema = z.object({
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
    .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export const login = async (_: any, formData: FormData) => {
  const formDataObject = Object.fromEntries(formData.entries());

  const parsedData = loginSchema.safeParse(formDataObject);

  if (!parsedData.success) {
    return parsedData.error.flatten();
  }

  console.log(parsedData.data);
};
