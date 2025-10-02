import * as React from "react";
import { cn } from "../../utils/cn";

export type CardProps = React.PropsWithChildren<{
  title?: string;
  className?: string;
}>;

export const Card: React.FC<CardProps> = ({ title, className, children }) => {
  return (
    <div className={cn("rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100", className)}>
      {title ? <h3 className="mb-2 font-semibold">{title}</h3> : null}
      <div>{children}</div>
    </div>
  );
};
