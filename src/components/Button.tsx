import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label: string;
  icon?: JSX.Element;
  loading?: boolean;
  onClick?: any;
}

const Button = ({
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
      className={` ${loading && "bg-gray-700 text-white cursor-not-allowed"}`}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

export default Button;
