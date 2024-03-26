"use server";

import { z } from "zod";

const schema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
  confirm_password: z.string().min(8),
});

export const onCreateAccount = async (
  state: any,
  formData: FormData,
) => {
  console.log(state);
  const formDataObject = Object.fromEntries(formData.entries());
  const parsedData = schema.safeParse(formDataObject);

  if (!parsedData.success){
    return parsedData.error.flatten();
  }
};
