import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: any;
  label: string;
  icon?: JSX.Element;
  className?: string;
  disabled?: boolean;
  onClick?: any;
}

export function ButtonLanding({
  id,
  label,
  className,
  disabled,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`bg-component text-white hover:bg-navy border-none rounded-full w-full disabled:bg-navy disabled:text-gray-200 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label} {icon}
    </button>
  );
}
