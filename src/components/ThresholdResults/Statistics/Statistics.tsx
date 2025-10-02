import { useRef, useState } from "react";
import { EndpointStats } from "../../../types/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { insufficientDataValue } from "../../../utils/constants";
import { StatisticsItem } from "./StatisticsItem/StatisticsItem";
import { isDataSufficient } from "../../../utils/statistics";

type EndpointStatisticsProps = {
  endpointStats: EndpointStats;
  showInsights: boolean;
};

export const EndpointStatistics = ({
  endpointStats,
  showInsights,
}: EndpointStatisticsProps) => {
  const [showStats, setShowStats] = useState(false);
  const insufficientData = !isDataSufficient(endpointStats.numberOfElements);
  const statsSectionId = "endpoint-highlights";
  const showMainInsightsTransition = showInsights ? "opacity-100" : "opacity-0";
  const statsResultsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`transition duration-500 ${showMainInsightsTransition}`}
      ref={statsResultsRef}
    >
      <button
        onClick={() => setShowStats((prevValue) => !prevValue)}
        aria-controls={statsSectionId}
        className="
            transition-all duration-100 cursor-pointer text-lg font-bold text-white p-2 pl-0 rounded-lg border-1 border-transparent hover:border-white"
        aria-expanded={showStats ? "true" : "false"}
        aria-label={`${
          showStats ? "Hide" : "Show"
        } endpoint insights visibility`}
      >
        <div className="flex">
          <div className="pr-3" aria-hidden="true">
            {!showStats && <VisibilityIcon />}
            {showStats && <VisibilityOffIcon />}
          </div>
          <span className="mt-0.5 w-max">
            {!showStats && <span>Show </span>}
            {showStats && <span>Hide </span>}
            endpoint insights
          </span>
        </div>
      </button>
      <div
        className={` ${
          showStats ? "delay-400 max-h-96 mt-5" : "max-h-0 mt-0"
        } flex flex-wrap gap-4 transition-all duration-1000 ease-in-out ease-out overflow-hidden`}
        id={statsSectionId}
        aria-label="Endpoint insights"
      >
        {showStats && (
          <>
            <StatisticsItem
              label="Number of values analyzed:"
              value={endpointStats.numberOfElements}
            />
            <StatisticsItem label="Minimum:" value={endpointStats.minimum} />
            <StatisticsItem label="Maximum:" value={endpointStats.maximum} />
            <StatisticsItem label="Average:" value={endpointStats.average} />
            <StatisticsItem label="Median:" value={endpointStats.median} />
            <StatisticsItem
              label="Sorted percentiles:"
              value={`[${endpointStats.sorted}]`}
              styles={{ container: "h-18 overflow-auto" }}
            />
            {insufficientData && (
              <StatisticsItem
                label={`Not enough data. Enter more than' ${insufficientDataValue} values to generate more accurate results`}
                styles={{ label: "font-normal italic" }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
