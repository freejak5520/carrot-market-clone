"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login-section";
import { useFormState } from "react-dom";
import { loginAction } from "./actions";

// server route handler
const LoginPage = () => {
  const [state, formAction] = useFormState(loginAction, null);

  return (
    <div className="flex w-full flex-col gap-10 px-12 py-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Log in</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3" action={formAction}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        />
        <Button>Log in</Button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default LoginPage;
