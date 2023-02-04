import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: JSX.Element;
  loading?: boolean;
}

const CustomButton: FC<ButtonProps> = ({
  id,
  label,
  icon,
  loading,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`${loading && "bg-gray-700 cursor-not-allowed"}`}
      disabled={loading}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

export default CustomButton;
