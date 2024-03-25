import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login-section";
import { redirect } from "next/navigation";

const CreateAccountPage = () => {
  const onAction = async (formData: FormData) => {
    "use server";
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(formData);
      }, 1000);
    });

    redirect("");
  };

  return (
    <div className="flex w-full flex-col gap-10 px-12 py-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Welcome</h1>
        <h2 className="text-xl">
          Please enter the information below to sign up
        </h2>
      </div>
      <form className="flex flex-col gap-3" action={onAction}>
        <FormInput type="text" placeholder="Username" required errors={[]} />
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Password confirmation"
          required
          errors={[]}
        />
        <FormButton>Create account</FormButton>
      </form>
      <SocialLogin />
    </div>
  );
};
export default CreateAccountPage;
