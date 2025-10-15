import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router";
import {
  DATADOG_KEY,
  DOCUMENTATION_ROUTE,
  MONITOR_CONFIG_KEY,
  THRESHOLDS_KEY,
} from "../../utils/constants";

export const configureGeneratorDescriptionId =
  "configure-generator-description-id";
export const extractAndUploadCsvDescriptionI =
  "extract-and-upload-csv-description";

export const Introduction = () => {
  return (
    <div className="text-left max-w-250 relative z-1000">
      <div
        role="tooltip"
        className="bg-black text-white absolute size-full opacity-90 gap-5 flex flex-col h-min hidden"
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
            threshold values that may lead to noisy alerts, this tool can be
            used statistical analysis to determine the appropriate thresholds
            for your endpoints.
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
            <Link to={`TODO`} className="underline mx-1">
              learn how to define a query based on percentiles and export
              Datadog metrics
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
      <div className="flex gap-3">
        <h1
          className="font-bold text-3xl uppercase"
          aria-describedby="generator-tooltip"
        >
          Dynamic Threshold Generator
        </h1>
        <button className="cursor-pointer" aria-labelledby="tooltip-label">
          <span className="sr-only" id="tooltip-label">
            Toggle generator explanation
          </span>
          <HelpOutlineIcon fontSize="medium" />
        </button>
      </div>
      <h3 className="text-lg mt-3 mb-5">
        <span id={extractAndUploadCsvDescriptionI}>
          Extract a Datadog endpoint metrics csv file using any percentile
          aggregation and upload it to generate warning and critical thresholds
          suggestions.
        </span>
        <span className="pl-1" id={configureGeneratorDescriptionId}>
          Configure the generator to define how rigorous you want the threshold
          suggestions to be.
        </span>
      </h3>
    </div>
  );
};
