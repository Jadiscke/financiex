import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      className="ui-hover:bg-emerald-900 ui-flex ui-w-fit ui-flex-none ui-items-center ui-justify-center ui-self-center ui-rounded-lg ui-border ui-border-emerald-400 ui-bg-emerald-500 ui-px-4 ui-py-2 ui-duration-300"
      onClick={onClick}
    >
      <span className="text-white">{children}</span>
    </button>
  );
};
