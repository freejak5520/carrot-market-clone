import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const CreateAccountPage = () => {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">회원가입을 위해 아래 정보를 입력해주세요</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="Username"
          required
          errors={["Username을 입력해주세요"]}
        />
        <FormInput
          type="email"
          placeholder="이메일"
          required
          errors={["이메일을 입력해주세요"]}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={["Password을 입력해주세요"]}
        />
        <FormInput
          type="password"
          placeholder="Password 확인"
          required
          errors={["Password을 입력해주세요"]}
        />
        <FormButton loading={false}>Create account</FormButton>
      </form>
      <div className="h-px w-full bg-neutral-500" />
      <div className="flex flex-col gap-2">
        <Link
          className="btn-primary flex h-10 items-center justify-center gap-2"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-5" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
};
export default CreateAccountPage;
