import { Link } from "react-router";
import {
  DATADOG_KEY,
  DOCUMENTATION_ROUTE,
  MONITOR_CONFIG_KEY,
  THRESHOLDS_KEY,
} from "../../utils/constants";

export const MainTooltip = () => {
  return (
    <div
      role="tooltip"
      className="bg-black text-white absolute size-full opacity-90 gap-5 flex flex-col h-min"
      id="generator-tooltip"
    >
      <h1 className="text-xl">How to use the generator</h1>
      <div>
        <h2 className="text-md pb-2 font-bold">
          Why the generator can help you
        </h2>
        <span>
          This generator is a tool to generate dynamic thresholds based on the
          historical data of your endpoints. Instead of relying on arbitrary
          threshold values that may lead to noisy alerts, this tool can be used
          statistical analysis to determine the appropriate thresholds for your
          endpoints.
        </span>
      </div>
      <div>
        <h2 className="text-md pb-2 font-bold">
          What do you need to know before you use this tool
        </h2>
        <span>
          After understanding what
          <Link
            to={`${DOCUMENTATION_ROUTE}/${DATADOG_KEY}`}
            className="underline ml-1"
          >
            what is Datadog
          </Link>
          ,
          <Link
            to={`${DOCUMENTATION_ROUTE}/${THRESHOLDS_KEY}`}
            className="underline ml-1"
          ></Link>
          what thresholds do , and
          <Link to={`TODO`} className="underline ml-1">
            the role percentiles have when defining thresholds
          </Link>
          , you need to understand
          <Link
            to={`${DOCUMENTATION_ROUTE}/${MONITOR_CONFIG_KEY}`}
            className="underline ml-1"
          >
            how the Datadog monitor configuration works
          </Link>
          . This way, you can
          <Link to={`TODO`} className="underline mx-1">
            learn how to define a query based on percentiles and export Datadog
            metrics
          </Link>
          . This will be necessary as you'll need the exported metrics file to
          generate the thresholds.
        </span>
      </div>
      <div>
        <h2 className="text-md pb-2 font-bold">
          How to configure the generator
        </h2>
        <span>The configuration </span>
      </div>
      <div>
        <h2 className="text-md pb-2 font-bold">How to use the generator</h2>
        <ol className="list-inside list-decimal">
          <li>
            Extract a Datadog endpoint metrics csv file using any percentile
            aggregation.
          </li>
          <li>
            Update the configuration to generate more or less rigorous results
          </li>
          <li>Upload your metrics file to generate the results</li>
          <li>Update the configuration at any time</li>
        </ol>
      </div>
    </div>
  );
};
