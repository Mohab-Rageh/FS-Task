import React from "react";

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-6 flex-wrap">{children}</div>;
};

export default Row;
