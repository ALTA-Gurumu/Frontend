import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // id?: string;
  label?: string;
  loading?: boolean;
}

const ButtonProfil: FC<ButtonProps> = ({ id, label, loading, ...props }) => {
  return (
    <button
      id={id}
      disabled={loading}
      className={`w-40 h-10 rounded-2xl bg-[#F66B0E] text-white`}
    >
      Perbarui
    </button>
  );
};

export default ButtonProfil;
