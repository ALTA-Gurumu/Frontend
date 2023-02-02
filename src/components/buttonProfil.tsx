import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  loading?: boolean;
}

const ButtonProfil: FC<ButtonProps> = ({ id, label, loading, ...props }) => {
  return (
    <button
      id={id}
      disabled={loading}
      className={`h-10 rounded-2xl bg-[#F66B0E] text-white`}
      {...props}
    >
      {label}
    </button>
  );
};

export default ButtonProfil;
