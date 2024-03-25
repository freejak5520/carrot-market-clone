import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login-section";

const SMSLoginPage = () => {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="Phone number"
          required
          errors={[]}
        />
        <FormInput
          type="text"
          placeholder="Verification code"
          required
          errors={[]}
        />
        <FormButton>Send message</FormButton>
      </form>
    </div>
  );
};
export default SMSLoginPage;
