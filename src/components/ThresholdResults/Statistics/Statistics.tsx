import { useState } from "react";
import { EndpointStats } from "../../../types/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { insufficientDataValue } from "../../../utils/constants";

type EndpointStatisticsProps = {
  endpointStats: EndpointStats;
  showInsights: boolean;
};

export const EndpointStatistics = ({
  endpointStats,
  showInsights,
}: EndpointStatisticsProps) => {
  const [showStats, setShowStats] = useState(false);
  const insufficientData =
    endpointStats.numberOfElements < insufficientDataValue;
  const statsSectionId = "endpoint-highlights";
  const showMainInsightsTransition = showInsights ? "opacity-100" : "opacity-0";

  return (
    <>
      <div
        className={`transition duration-500 ${showMainInsightsTransition}`}
        aria-label="Endpoint insights"
      >
        <button
          onClick={() => setShowStats((prevValue) => !prevValue)}
          aria-controls={statsSectionId}
          className="
            transition-all duration-100 cursor-pointer text-lg font-bold text-white p-2 pl-0 rounded-lg border-1 border-transparent hover:border-white"
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
          aria-expanded={showStats}
          id={statsSectionId}
        >
          <p className="border-3 border-[#2a2c3e] p-3 rounded-lg flex-grow-1">
            <strong>
              Number of values analyzed:
              <span className="ml-2 text-cyan-500">
                {endpointStats.numberOfElements}
              </span>
            </strong>
          </p>
          <p className="border-3 border-[#2a2c3e] p-3 rounded-lg flex-grow-1">
            <strong>
              Minimum:
              <span className="ml-2 text-cyan-500">
                {endpointStats.minimum}
              </span>
            </strong>
          </p>
          <p className="border-3 border-[#2a2c3e] p-3 rounded-lg flex-grow-1">
            <strong>
              Maximum:
              <span className="ml-2 text-cyan-500">
                {endpointStats.maximum}
              </span>
            </strong>
          </p>
          <p className="border-3 border-[#2a2c3e] p-3 rounded-lg flex-grow-1">
            <strong>
              Average:
              <span className="ml-2 text-cyan-500">
                {endpointStats.average}
              </span>
            </strong>
          </p>
          <p className="border-3 border-[#2a2c3e] p-3 rounded-lg flex-grow-1">
            <strong>
              Median:
              <span className="ml-2 text-cyan-500">{endpointStats.median}</span>
            </strong>
          </p>
          <p className="border-3 border-[#2a2c3e] p-3 rounded-lg flex-grow-1 h-18 overflow-auto">
            <strong>Sorted percentiles: </strong>
            <span className="ml-2 text-cyan-300">[{endpointStats.sorted}]</span>
          </p>
          <p></p>
          {insufficientData && (
            <p>
              <i>
                <strong>Note:</strong> Not enough data: enter more than{" "}
                <span className="mx-1">{insufficientDataValue}</span>
                values for a more accurate result.
              </i>
            </p>
          )}
        </div>
      </div>
    </>
  );
};
