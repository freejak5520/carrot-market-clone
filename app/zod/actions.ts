"use server";

import { z } from "zod";

const schema = z
  .object({
    username: z
      .string()
      .refine(async () => {
        console.log("start username 1");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("end username 1");
        return false;
      })
      .refine(async () => {
        console.log("start username 2");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("end username 2");
        return true;
      }),
    email: z
      .string()
      .refine(async () => {
        console.log("start email 1");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("end email 1");
        return true;
      })
      .refine(async () => {
        console.log("start email 2");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("end email 2");
        return true;
      }),
  })
  .refine(async () => {
    console.log("start object 1");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("end object 1");
    return true;
  })
  .refine(async () => {
    console.log("start object 2");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("end object 2");
    return true;
  });

export const action = async (_: any, formData: FormData) => {
  const formDataObject = Object.fromEntries(formData.entries());

  console.log("==Start==", new Date());

  const parsedData = await schema.safeParseAsync(formDataObject);

  console.log("==End==", new Date());

  if (!parsedData.success) {
    return parsedData.error.flatten();
  }
};
