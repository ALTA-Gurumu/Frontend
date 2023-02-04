import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
}

export function CustomInput({
  id,
  placeholder,
  ...props
}: Props) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="bg-slate-200 rounded-lg text-black p-2 border focus:outline-none focus: border-blue-900 focus:ring-1 focus:ring-blue-900"
      {...props}
    />
  );
}

export function InputIcon({ id, placeholder, ...props }: Props) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="input input-ghost h-8 pl-0 w-full max-w-full"
      {...props}
    />
  );
}
