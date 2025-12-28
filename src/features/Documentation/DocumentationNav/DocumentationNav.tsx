import { useLocation } from "react-router";
import { DocNavButton } from "./DocNavButton/DocNavButton";
import {
  DATADOG_KEY,
  DOCUMENTATION_ROUTE,
  MONITOR_CONFIG_KEY,
  MONITORING_STRATEGIES_KEY,
  OBSERVABILITY_KEY,
  THRESHOLDS_KEY,
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
            isOpen={
              pathname == DOCUMENTATION_ROUTE ||
              pathname == `${DOCUMENTATION_ROUTE}/${OBSERVABILITY_KEY}`
            }
            path="observability"
          />
        </li>
        <li>
          <DocNavButton
            label="Datadog"
            isOpen={pathname == `${DOCUMENTATION_ROUTE}/${DATADOG_KEY}`}
            path={DATADOG_KEY}
          />
        </li>
        <li>
          <DocNavButton
            label="Thresholds"
            isOpen={pathname == `${DOCUMENTATION_ROUTE}/${THRESHOLDS_KEY}`}
            path={THRESHOLDS_KEY}
          />
        </li>
        <li>
          <DocNavButton
            label="Monitor Configuration"
            isOpen={pathname == `${DOCUMENTATION_ROUTE}/${MONITOR_CONFIG_KEY}`}
            path={MONITOR_CONFIG_KEY}
          />
        </li>
        <li>
          <DocNavButton
            label="Monitoring Strategies"
            isOpen={
              pathname == `${DOCUMENTATION_ROUTE}/${MONITORING_STRATEGIES_KEY}`
            }
            path={MONITORING_STRATEGIES_KEY}
          />
        </li>
      </ul>
    </div>
  );
};
