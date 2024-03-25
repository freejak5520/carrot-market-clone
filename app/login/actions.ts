"use server";

export const onLogin = async (
  state: { errors: string[] },
  formData: FormData,
) => {
  console.log(state);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    errors: ["wrong password", "password is too short"],
  };
};
