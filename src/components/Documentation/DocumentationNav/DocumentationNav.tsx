import { useLocation } from "react-router";
import { DocNavButton } from "./DocNavButton/DocNavButton";
import {
  DATADOG_KEY,
  DOCUMENTATION_ROUTE,
  OBSERVABILITY_KEY,
} from "../../../utils/constants";

export const DocumentationNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-black border-l-20 lg:border-l-0 lg:border-r-35 border-[#030712] h-dvh h-auto p-9">
      <ul
        aria-label="Documentation navigation"
        role="navigation"
        className="flex flex-col gap-8 mt-3 cursor-pointer text-right"
      >
        <li>
          <DocNavButton
            label="Observability"
            isOpen={pathname === `${DOCUMENTATION_ROUTE}/${OBSERVABILITY_KEY}`}
            path="observability"
          />
        </li>
        <li>
          <DocNavButton
            label="Datadog"
            isOpen={pathname === `${DOCUMENTATION_ROUTE}/${DATADOG_KEY}`}
            path="datadog"
          />
        </li>
      </ul>
    </div>
  );
};
