"use server";

import { redirect } from "next/navigation";
import validator from "validator";
import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (value) => validator.isMobilePhone(value, "ko-KR"),
    "유효한 전화번호를 입력해 주세요.",
  );
const tokenSchema = z.coerce.number().min(100000).max(999999);

type VerifySmsState = {
  token: boolean;
  errors?: any;
};

export const verifySmsAction = async (
  state: VerifySmsState,
  formData: FormData,
) => {
  // console.log(state, formData);
  const phone = formData.get("phone");
  const token = formData.get("token");

  if (!state.token) {
    console.log(phone);
    const phoneParse = phoneSchema.safeParse(phone);

    if (phoneParse.success) {
      return {
        token: true,
      };
    } else {
      return {
        token: false,
        errors: phoneParse.error.flatten(),
      };
    }
  } else {
    console.log(token);
    const tokenParse = tokenSchema.safeParse(token);

    if (!tokenParse.success) {
      console.log(tokenParse.error.flatten());
      return {
        token: true,
        errors: tokenParse.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
};
