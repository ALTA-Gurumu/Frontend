import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: JSX.Element;
  loading?: boolean;
}

const CustomButton = ({ id, label, icon, loading, ...props }: ButtonProps) => {
  return (
    <button
      id={id}
      className={` ${loading && "bg-gray-700 cursor-not-allowed"}`}
      disabled={loading}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

export default CustomButton;
