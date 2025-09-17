import { useState } from "react";
import { EndpointStats } from "../../../types/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type EndpointStatisticsProps = {
  endpointStats: EndpointStats;
  showInsights: boolean;
};

export const EndpointStatistics = ({
  endpointStats,
  showInsights,
}: EndpointStatisticsProps) => {
  const [showStats, setShowStats] = useState(false);
  const insufficientData = endpointStats.numberOfElements < 4;
  const statsSectionId = "endpoint-highlights";
  return (
    <>
      {showInsights && (
        <div className="bg-[#11131f] p-5 ease-in-out">
          <button
            onClick={() => setShowStats((prevValue) => !prevValue)}
            aria-controls={statsSectionId}
            className="cursor-pointer text-lg font-bold bg-[#2a2c3e] text-white p-2 rounded-lg"
          >
            <div className="flex">
              <div className="pr-3" aria-hidden="true">
                {!showStats && <VisibilityIcon />}
                {showStats && <VisibilityOffIcon />}
              </div>
              <span className="mt-0.5">
                {!showStats && <span>Show </span>}
                {showStats && <span>Hide </span>}
                endpoint insights
              </span>
            </div>
          </button>
          {showStats && (
            <div className="mt-5">
              <div
                className="flex flex-wrap gap-4"
                aria-expanded={showStats}
                id={statsSectionId}
              >
                <p className="border-1 p-3 rounded-lg flex-grow-1">
                  <strong>Number of values analyzed: </strong>
                  {endpointStats.numberOfElements}
                </p>
                <p className="border-1 p-3 rounded-lg flex-grow-1">
                  <strong>Minimum: </strong>
                  {endpointStats.minimum}
                </p>
                <p className="border-1 p-3 rounded-lg flex-grow-1">
                  <strong>Maximum: </strong>
                  {endpointStats.maximum}
                </p>
                <p className="border-1 p-3 rounded-lg flex-grow-1">
                  <strong>Average: </strong>
                  {endpointStats.average}
                </p>
                <p className="border-1 p-3 rounded-lg flex-grow-1">
                  <strong>Median: </strong>
                  {endpointStats.median}
                </p>
                <p className="border-1 p-3 rounded-lg flex-grow-1">
                  <strong>Sorted percentiles:</strong> [{endpointStats.sorted}]
                </p>
                <p></p>
                {insufficientData && (
                  <p>
                    <i>
                      <strong>Note:</strong> Not enough data: enter more than
                      four values for a more accurate result.
                    </i>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
