import { ArrowPathIcon } from "@heroicons/react/24/solid";

interface FormButtonProps {
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const FormButton = ({ loading, children, onClick }: FormButtonProps) => {
  return (
    <button
      className="btn-primary h-10 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-neutral-300"
      disabled={loading}
      onClick={onClick}
    >
      {loading ? (
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
