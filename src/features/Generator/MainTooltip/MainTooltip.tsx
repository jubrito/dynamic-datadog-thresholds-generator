import { Link } from "react-router";
import {
  DATADOG_KEY,
  DOCUMENTATION_ROUTE,
  MONITOR_CONFIG_KEY,
  THRESHOLDS_KEY,
} from "../../../utils/constants";
import {
  stylesGrayerDarkGrayBlue,
  stylesMainBlue,
} from "../../../utils/styles";
import CloseIcon from "@mui/icons-material/Close";

type MainTooltipProps = {
  setDisplayTooltip: React.Dispatch<React.SetStateAction<boolean>>;
  displayTooltip?: boolean;
};

export const MainTooltip = ({ setDisplayTooltip }: MainTooltipProps) => (
  <div
    role="tooltip"
    className={`${stylesMainBlue.background} border-10 ${stylesMainBlue.border} absolute h-full overflow-y-scroll text-white absolute z-2 p-5`}
    id="generator-tooltip"
  >
    <div className={`float-right sticky top-0 flex justify-end`}>
      <button
        aria-label="Close explanation and go back to generator"
        onClick={() => setDisplayTooltip(false)}
        className={`cursor-pointer ${stylesGrayerDarkGrayBlue.background} p-2 rounded-3xl`}
      >
        <CloseIcon />
      </button>
    </div>
    <div className="gap-10 flex flex-col">
      <h1 className="text-3xl">How to use the generator</h1>
      <div>
        <h2 className="text-2xl pb-2 font-bold">
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
        <h2 className="text-2xl pb-2 font-bold">
          What do you need to know before you use this tool
        </h2>
        <span>
          After understanding
          <Link
            to={`${DOCUMENTATION_ROUTE}/${DATADOG_KEY}`}
            className="underline ml-1"
          >
            what Datadog is
          </Link>
          ,
          <Link
            to={`${DOCUMENTATION_ROUTE}/${THRESHOLDS_KEY}`}
            className="underline ml-1"
          >
            what thresholds do
          </Link>
          , and
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
          <Link
            to={`${DOCUMENTATION_ROUTE}/TODO-PERCENTILES`}
            className="underline mx-1"
          >
            learn how to define a query based on percentiles and export Datadog
            metrics
          </Link>
          . This will be necessary as you'll need the exported metrics file to
          generate the thresholds.
        </span>
      </div>
      <div>
        <h2 className="text-2xl pb-2 font-bold">
          How to configure the generator
        </h2>
        <span>
          There are two main variables you can configure, the initial percentile
          and the rigorour factor:
        </span>
        <h3 className="text-xl pt-4 pb-2">Initial percentile</h3>
        <span>
          The base percentile allows you do choose the type of request to focus.
          After uploading the metrics file with the percentile values from your
          endpoint, instead of analyzing all the data uploaded, you can choose a
          base
          <Link
            to={`${DOCUMENTATION_ROUTE}/TODO-PERCENTILES`}
            className="underline mx-1"
          >
            percentile
          </Link>
          that will influence how much data the algorithm the use.
        </span>
        <ul className="list-inside list-disc py-1">
          <li className="py-1">
            Lower percentiles will filter the uploaded values that represents
            the faster requests, which measures how fast users are affected
          </li>
          <li className="py-1">
            A median (50th percentile) will filter the uploaded values that
            represents the normal requests, which measures the typical user
            experience
          </li>
          <li className="py-1">
            Higher percentiles will filter the uploaded values that represents
            the slower requests, which measures how slow users are affected
          </li>
        </ul>
        <h3 className="text-xl pt-4 pb-2">Rigorour factor</h3>
        <span>Lower Higher Rigorousness</span>
      </div>
      <div>
        <h2 className="text-2xl pb-2 font-bold">Steps to use the generator</h2>
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
  </div>
);
