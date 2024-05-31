import { PropsWithChildren } from "react";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-[750px] flex-grow mx-auto">{children}</div>;
};

export default PageLayout;
