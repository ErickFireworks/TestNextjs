import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      className="border border-white/50 placeholder-white placeholder-opacity-30 rounded-full bg-transparent p-4 w-full focus:border-white/100 focus:ring-transparent"
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";
