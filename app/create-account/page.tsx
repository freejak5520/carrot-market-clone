"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login-section";
import { redirect } from "next/navigation";
import { onCreateAccount } from "./actions";
import { useFormState, useFormStatus } from "react-dom";

const CreateAccountPage = () => {
  const [state, action] = useFormState(onCreateAccount, null);

  return (
    <div className="flex w-full flex-col gap-10 px-12 py-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Welcome</h1>
        <h2 className="text-xl">
          Please enter the information below to sign up
        </h2>
      </div>
      <form className="flex flex-col gap-3" action={action}>
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          errors={state?.fieldErrors?.username}
        />
        <FormInput
          name="email"
          type="text"
          placeholder="Email"
          errors={state?.fieldErrors?.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          errors={state?.fieldErrors?.password}
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Password confirmation"
          errors={state?.fieldErrors?.confirm_password}
        />
        <FormButton>Create account</FormButton>
      </form>
      <SocialLogin />
    </div>
  );
};
export default CreateAccountPage;
