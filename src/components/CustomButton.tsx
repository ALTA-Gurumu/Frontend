import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
}

const CustomButton = ({ id, label, loading, ...props }: ButtonProps) => {
  return (
    <button
      id={id}
      className={` ${loading && "bg-gray-700 cursor-not-allowed"}`}
      disabled={loading}
      {...props}
    >
      {label}
    </button>
  );
};

export default CustomButton;
