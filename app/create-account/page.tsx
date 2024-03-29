"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login-section";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { useFormState } from "react-dom";
import { createAccountAction } from "./actions";

const CreateAccountPage = () => {
  const [state, formAction] = useFormState(createAccountAction, null);

  return (
    <div className="flex w-full flex-col gap-10 px-12 py-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Welcome</h1>
        <h2 className="text-xl">
          Please enter the information below to sign up
        </h2>
      </div>
      <form className="flex flex-col gap-3" action={formAction}>
        <Input
          name="username"
          type="text"
          placeholder="Username"
          errors={state?.fieldErrors.username}
        />
        <Input
          name="email"
          type="text"
          placeholder="Email"
          errors={state?.fieldErrors.email}
          autoComplete="username"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
          autoComplete="new-password"
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="Password confirmation"
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.confirm_password}
          autoComplete="new-password"
        />
        <Button>Create account</Button>
      </form>
      <SocialLogin />
    </div>
  );
};
export default CreateAccountPage;
