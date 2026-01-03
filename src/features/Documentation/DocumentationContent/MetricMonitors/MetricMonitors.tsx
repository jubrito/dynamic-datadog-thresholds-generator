import { BorderBox } from "../../../../components/BorderBox/BorderBox";
import { Divider } from "../../../../components/Divider/Divider";
import { PreviousNextButtons } from "../../../../components/PreviousNextButtons/PreviousNextButtons";
import {
  DOCUMENTATION_ROUTE,
  MONITOR_CONFIG_KEY,
  QUERIES_FORMULAS_KEY,
} from "../../../../utils/constants";
import Endpoints from "../../../../assets/endpoints.jpg";

export const MetricMonitors = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Monitors</h1>
      <h2 className="text-2xl">Metric Monitors</h2>

      <p>
        Metric Monitors can be a great tool to
        <strong className="pl-1">
          draw attention to the systems that require observation, inspection,
          and intervention
        </strong>
      </p>
      <BorderBox>
        <p>
          By actively checking metrics and network endpoints, they can be used
          to create alerts when any metric cross a threshold over a given period
          of time
        </p>
      </BorderBox>
      <img
        src={Endpoints}
        alt=""
        className="w-full h-full object-cover min-w-full xl:min-h-full"
      />
      <p>
        This monitoring helps us to identify which systems require our
        prioritization so we know how and when to act
      </p>
      <Divider />
      <PreviousNextButtons
        previous={{
          label: "Queries and Formulas",
          path: `${DOCUMENTATION_ROUTE}/${QUERIES_FORMULAS_KEY}`,
        }}
        next={{
          label: "Monitor Configuration",
          path: `${DOCUMENTATION_ROUTE}/${MONITOR_CONFIG_KEY}`,
        }}
      />
    </div>
  );
};
