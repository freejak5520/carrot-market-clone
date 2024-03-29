"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { verifySmsAction } from "./actions";

const SMSLoginPage = () => {
  const [state, formAction] = useFormState(verifySmsAction, {});

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3" action={formAction}>
        <Input
          name="phone"
          type="text"
          placeholder="Phone number"
          errors={[]}
        />
        <Input
          name="token"
          type="text"
          placeholder="Verification code"
          errors={[]}
        />
        <Button>Send message</Button>
      </form>
    </div>
  );
};
export default SMSLoginPage;
