import { BorderBox } from "../../../../components/BorderBox/BorderBox";
import { ColorBox } from "../../../../components/ColorBox/ColorBox";
import { Divider } from "../../../../components/Divider/Divider";
import { PreviousNextButtons } from "../../../../components/PreviousNextButtons/PreviousNextButtons";
import {
  DOCUMENTATION_ROUTE,
  MONITORING_STRATEGIES_KEY,
} from "../../../../utils/constants";
import P95PercentileImage from "../../../../assets/p95-percentile.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const AVG = {
  acronym: "AVG",
  label: "Average",
  bg: "bg-pink-600",
  color: "text-pink-600",
  border: "border-pink-600",
  textColor: "text-white",
  description: "Average of data points over a time window.",
  content: [
    "Hides spikes",
    "Tilted by outliers",
    "Slow response to changes",
    "Does not highlight short-term anomalies that could indicate critical issues.",
  ],
};
const MIN_MAX = {
  acronym: "MIN / MAX",
  label: "Min / Max",
  bg: "bg-violet-600",
  color: "text-violet-600",
  border: "border-violet-600",
  textColor: "text-white",
  description: "Minimum or maximum value within the time window.",
  content: [
    "Unreliable",
    "Too sensitive",
    "One anomaly can distort entire picture",
    "Prone to overreacting to single outliers, leading to unnecessary alerts.",
  ],
};
const SUM = {
  acronym: "SUM",
  label: "Sum",
  bg: "bg-cyan-500",
  color: "text-cyan-500",
  border: "border-cyan-500",
  description: "Sum of all values in the time window.",
  textColor: "text-black",
  content: [
    "Doesn’t reflect speed or quality",
    "Unsuitable for dynamic environments",
    "Fails to account for variations in traffic volume, making it unsuitable for dynamic environments.",
    "Not useful for performance thresholds as it can be misleading when comparing endpoints with vastly different request rates",
  ],
};
const PERCENTILE = {
  acronym: "PERCENTILE",
  label: "Percentile",
  bg: "bg-blue-800",
  color: "text-blue-800",
  border: "border-blue-800",
  textColor: "text-white",
  description: "Value below which a certain percentage of data points fall",
  content: [
    "Customizable Sensitivity: Can focus on the “bad but common” cases but also the worst case scenarios",
    "Easier to filter out noisy outliers (e.g., the 1% of requests that are abnormally slow)",
    "Detects gradual degradation early",
    "Scalability",
  ],
};
const aggregations = [AVG, MIN_MAX, SUM, PERCENTILE];

export const AggregationsPercentilesQueries = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">
        Aggregations, Percentiles & Queries
      </h1>
      <h2 className="text-2xl">Aggregations</h2>
      <p>
        To extract endpoint metrics, we need to decide what we're going to
        query.
      </p>
      <p>
        <strong className="font-bold block">
          Aggregations are methods used to consolidate multiple data points into
          a single value.
        </strong>
        They determine how raw data points are grouped and summarized over a
        period of time:
      </p>
      <ul className="list-inside list-disc">
        {aggregations.map((agg) => {
          const descriptionId = `acronym-${agg.acronym}`;
          return (
            <li key={agg.acronym} className="my-6 mt-0">
              <ColorBox
                style={`${agg.bg} ${agg.textColor} mr-2 w-fit p-2 px-2 inline`}
              >
                <abbr aria-describedby={descriptionId}>{agg.acronym}</abbr>
              </ColorBox>
              <ArrowRightAltIcon />
              <span className="ml-2 font-bold" id={descriptionId}>
                {agg.description}
              </span>
            </li>
          );
        })}
      </ul>
      <h3 className="text-left text-xl">
        Advantages and disavantages of each aggregation:
      </h3>
      <div className="flex flex-wrap w-full">
        {aggregations.map((agg) => {
          const labelId = `aggregation-label-${agg.acronym}`;
          return (
            <BorderBox
              style={`${agg.border} p-0 mb-5 border-2 mr-5 size-full min-w-full`}
            >
              <ColorBox
                style={`${agg.bg} ${agg.textColor} text-xl px-5 mr-10 w-full`}
                id={labelId}
              >
                {agg.label}
              </ColorBox>
              <div>
                {agg.content.map((item) => {
                  return (
                    <div aria-labelledby={labelId}>
                      <p key={item} className="block m-2 max-w-170 xl:w-115">
                        <PlayArrowIcon className={`pr-1 ${agg.color}`} />
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </BorderBox>
          );
        })}
      </div>
      <Divider />
      <div className="flex flex-row">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">Percentiles</h2>
          <p>
            Percentile tell the value below which a given percentage of data
            falls
          </p>
          <p>If we analyze an endpoint request time:</p>
          <BorderBox>
            <ColorBox style={`mr-2 w-fit p-1 px-1 inline bg-white text-black`}>
              P50 (median)
            </ColorBox>
            <p className="my-2 mb-5">
              Means 50% of the requests are faster than this value, 50% are
              slower
            </p>
            <ColorBox style={`mr-2 w-fit p-1 px-1 inline bg-white text-black`}>
              P95 (95th percentile)
            </ColorBox>
            <p className="mt-2">
              Means 95% of the requests are faster than this value, 5% are
              slower
            </p>
          </BorderBox>
        </div>
        <img src={P95PercentileImage} alt="" className="float-right h-90" />
      </div>
      <Divider />
      <h2 className="text-2xl">Queries and Formulas with Percentiles</h2>
      <p>
        We can combine the request time with the p95 percentile to extract
        endpoint metrics using queries and figure out how slow the worst 5% of
        requests are
      </p>
      <p>
        <strong>Query:</strong>
      </p>
      <ColorBox style="bg-gray-400 w-full text-center ">
        <code>{`avg:app.request_time_ms.95percentile{api_env:prod,uri:/content_tools/<ENDPOINT_PATH>}`}</code>
      </ColorBox>
      <p>
        <strong>Formula:</strong>
      </p>
      <ColorBox style="bg-gray-400 w-full text-center">
        <code>{`x / 1000 // convert query above (which measures the request time) from ms to seconds`}</code>
      </ColorBox>
      <Divider />
      <PreviousNextButtons
        previous={{
          label: "Monitoring Strategies",
          path: `${DOCUMENTATION_ROUTE}/${MONITORING_STRATEGIES_KEY}`,
        }}
      />
    </div>
  );
};
