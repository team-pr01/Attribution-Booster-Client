import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1250px] 2xl:max-w-[1800px] mx-auto px-5 lg:px-10 2xl:px-0">
      {children}
    </div>
  );
};

export default Container;
