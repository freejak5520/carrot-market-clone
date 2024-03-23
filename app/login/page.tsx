import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login-section";

const LoginPage = () => {
  return (
    <div className="flex w-full flex-col gap-10 px-12 py-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">로그인</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="이메일" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton loading={false}>Log in</FormButton>
      </form>
      <SocialLogin />
    </div>
  );
};
export default LoginPage;
