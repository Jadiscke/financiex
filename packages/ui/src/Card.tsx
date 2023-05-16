import * as React from "react";

type CardProps = {
  children: React.ReactNode;
  title: string;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const Card = ({
  title,
  children,
  className
}:CardProps) => {
  return (
    <div className={ `ui-flex ui-flex-col ui-p-8 ui-gap-4 ui-bg-gray-100 ui-rounded-md ${className ? className : ''}`}>
      <h3 className="ui-text-xl ui-text-emerald-950 ui-self-start">{title}</h3>

      <div className="ui-flex ui-items-center ui-justify-center ui-self-center">
        {children}
      </div>
    </div>
  );
};
