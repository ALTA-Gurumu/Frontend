import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  loading?: boolean;
  icon?: JSX.Element;
  onClick?: any;
}

const CustomButton = ({
  id,
  label,
  icon,
  onClick,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={` ${loading && "bg-gray-700 cursor-not-allowed"}`}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};

export default CustomButton;
