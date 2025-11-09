import { Link } from "react-router";
import {
  DATADOG_KEY,
  DOCUMENTATION_ROUTE,
  MONITOR_CONFIG_KEY,
  THRESHOLDS_KEY,
} from "../../../utils/constants";
import { stylesMainBlue } from "../../../utils/styles";
import CloseIcon from "@mui/icons-material/Close";
import { DynamicVisibility } from "../../../components/DynamicVisibility/DynamicVisibility";
import { BorderBox } from "../../../components/BorderBox/BorderBox";

type MainTooltipProps = {
  setDisplayContent: React.Dispatch<React.SetStateAction<boolean>>;
  displayContent?: boolean;
};

const Heading = ({ children }: { children: string }) => (
  <h3 className="text-xl pb-2 font-bold">{children}</h3>
);

export const MainTooltip = ({ setDisplayContent }: MainTooltipProps) => (
  <div
    role="tooltip"
    className={`min-h-110 overflow-y-hidden ${stylesMainBlue.background} border-10 ${stylesMainBlue.border} absolute h-full text-white absolute px-5 w-full rounded-xl`}
    id="generator-tooltip"
  >
    <div className={`w-full flex justify-between pb-4 mb-3 shadow-lg`}>
      <h2 className="text-3xl pt-2">How to use the generator</h2>
      <button
        aria-label="Close explanation and go back to generator"
        onClick={() => setDisplayContent(false)}
        className={`cursor-pointer rounded-3xl`}
      >
        <CloseIcon />
      </button>
    </div>
    <div className="overflow-y-scroll h-80">
      <div className="gap-10 flex flex-col w-full">
        <DynamicVisibility
          isAccordion
          triggerComponent={() => (
            <Heading>Why this generator can help you</Heading>
          )}
          contentComponent={() => <WhyGeneratorHelps />}
          styles={{ triggerComponent: "border-b-1 mb-2" }}
        />
        <DynamicVisibility
          isAccordion
          triggerComponent={() => (
            <Heading>What you need to know before using this tool</Heading>
          )}
          contentComponent={() => <WhatYouNeedToKnow />}
          styles={{ triggerComponent: "border-b-1 mb-2" }}
        />
        <DynamicVisibility
          isAccordion
          triggerComponent={() => (
            <Heading>How to configure the generator</Heading>
          )}
          contentComponent={() => <HowToConfigure />}
          styles={{ triggerComponent: "border-b-1 mb-2" }}
        />
        <DynamicVisibility
          isAccordion
          triggerComponent={() => <Heading>Steps to use the generator</Heading>}
          contentComponent={() => <StepsToUse />}
          styles={{ triggerComponent: "border-b-1 mb-2" }}
        />
      </div>
    </div>
  </div>
);

const WhyGeneratorHelps = () => (
  <span>
    This generator is a tool to generate dynamic thresholds based on the
    historical data of your endpoints. Instead of relying on arbitrary threshold
    values that may lead to noisy alerts, this tool can be used statistical
    analysis to determine the appropriate thresholds for your endpoints.
  </span>
);

const WhatYouNeedToKnow = () => (
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
);

const HowToConfigure = () => (
  <>
    <span>
      There are two main variables you can configure, the initial percentile and
      the rigorour factor:
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
    <div className="flex gap-5 mt-5">
      <BorderBox style="flex flex-col gap-2">
        <span className="font-bold">Lower percentiles</span>
        <span>
          filter the uploaded values that represents the faster requests, which
          measures how fast users are affected
        </span>
      </BorderBox>
      <BorderBox style="flex flex-col gap-2">
        <span className="font-bold">A median (50th percentile)</span>
        filters the uploaded values that represents the normal requests, which
        measures the typical user experience
      </BorderBox>
      <BorderBox style="flex flex-col gap-2">
        <span className="font-bold">Higher percentiles</span>
        filter the uploaded values that represents the slower requests, which
        measures how slow users are affected
      </BorderBox>
    </div>
    <h3 className="text-xl pt-4 pb-2">Rigorour factor</h3>
    <span>Lower Higher Rigorousness</span>
  </>
);

const StepsToUse = () => (
  <ol className="list-inside list-decimal">
    <li>
      Extract a Datadog endpoint metrics csv file using any percentile
      aggregation.
    </li>
    <li>Update the configuration to generate more or less rigorous results</li>
    <li>Upload your metrics file to generate the results</li>
    <li>Update the configuration at any time</li>
  </ol>
);
