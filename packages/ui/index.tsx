import React from "react";
export const Card: React.FC<React.PropsWithChildren<{ title: string }>> = ({ title, children }) => (
  <div className="rounded-xl border p-4 shadow-sm bg-white">
    <h2 className="font-semibold mb-2">{title}</h2>
    <div>{children}</div>
  </div>
);
