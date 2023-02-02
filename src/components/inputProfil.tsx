import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
}

const InputProfil = ({ id, placeholder, ...props }: Props) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="input input-ghost h-8 pl-0 w-full max-w-full"
      {...props}
    />
  );
};

export default InputProfil;
