import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login-section";
import { NextRequest } from "next/server";

// server route handler
const LoginPage = () => {
  const handleForm = async (formData: FormData) => {
    "use server";
    console.log(formData.get("email"), formData.get("password"));
  };

  return (
    <div className="flex w-full flex-col gap-10 px-12 py-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Log in</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3" action={handleForm}>
        <FormInput name="email" type="email" placeholder="Email" errors={[]} />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          // required
          errors={[]}
        />
        <FormButton loading={false}>Log in</FormButton>
      </form>
      <SocialLogin />
    </div>
  );
};

export default LoginPage;
