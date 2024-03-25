"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login-section";
import { useFormState } from "react-dom";
import { onLogin } from "./actions";

// server route handler
const LoginPage = () => {
  const [state, action] = useFormState(onLogin, { errors: [] });

  return (
    <div className="flex w-full flex-col gap-10 px-12 py-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Log in</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3" action={action}>
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state.errors}
        />
        <FormButton>Log in</FormButton>
      </form>
      <SocialLogin />
    </div>
  );
};

export default LoginPage;
