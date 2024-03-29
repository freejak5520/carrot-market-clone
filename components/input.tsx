import { InputHTMLAttributes } from "react";

// interface, type 어느정도는 취향 차이
// type의 기능이 필요하기 전 까지 interface를 사용
// type의 기능이란?
interface FormInputProps {
  name: string;
  errors?: string[];
}

const Input = ({
  name,
  errors,
  ...props
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="h-10 w-full rounded-md border-none bg-transparent ring-2 ring-neutral-200 transition placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-orange-500"
        {...props}
      />
      {errors &&
        errors.map((error, index) => (
          <span key={index} className="text-sm text-red-500">
            {error}
          </span>
        ))}
    </div>
  );
};

export default Input;
