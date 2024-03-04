import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const LayoutSheet = ({ children }: LayoutProps) => {
  return (
    <div className="w-full xl:w-1/3 responsive-margin xl:h-[95%] bg-gray-100 rounded-md p-5">
      {children}
    </div>
  );
};

export default LayoutSheet;
