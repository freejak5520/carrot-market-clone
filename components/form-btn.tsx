"use client";

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const FormButton = ({ children, onClick }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn-primary h-10 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-neutral-300"
      disabled={pending}
      onClick={onClick}
    >
      {pending ? (
        <span className="flex items-center justify-center">
          <ArrowPathIcon className="size-6 animate-spin" />
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default FormButton;
