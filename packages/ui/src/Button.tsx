import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({children, onClick = () => {}} : ButtonProps) => {
  return (
    <button
      className="ui-flex-none ui-w-fit ui-bg-emerald-500 ui-hover:bg-emerald-900 ui-border ui-border-emerald-400 ui-duration-300 ui-rounded-lg ui-flex ui-items-center ui-justify-center ui-px-4 ui-py-2 ui-self-center"
      onClick={onClick}
    >
    <span className="text-white">
      {children}
    </span>

  </button>
  );
};
