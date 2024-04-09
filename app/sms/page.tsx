"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { verifySmsAction } from "./actions";

const SMSLoginPage = () => {
  const [state, formAction] = useFormState(verifySmsAction, { token: false });

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3" action={formAction}>
        {!state.token ? (
          <Input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            errors={state.errors?.formErrors}
          />
        ) : (
          <Input
            id="token"
            name="token"
            type="number"
            placeholder="Verification code"
            required
            max={999999}
            maxLength={6}
            errors={state.errors?.formErrors}
          />
        )}
        <Button>{!state.token ? "Send message" : "Verify"}</Button>
      </form>
    </div>
  );
};
export default SMSLoginPage;
