import { mainHorizontalSpacing, mainTopSpacing } from "../../utils/styles";
import { Outlet } from "react-router";
import { DocumentationNav } from "./DocumentationNav/DocumentationNav";

export const Documentation = () => {
  return (
    <section
      className={`${mainTopSpacing} ${mainHorizontalSpacing} grid-cols-[30px_1fr_200px]`}
      role="region"
    >
      <div className="order-3 lg:order-1 ">
        <DocumentationNav />
      </div>
      <div className="order-2 lg:order-2 py-10 text-left">
        <Outlet />
      </div>
      <div className="order-1 lg:order-3" />
    </section>
  );
};
