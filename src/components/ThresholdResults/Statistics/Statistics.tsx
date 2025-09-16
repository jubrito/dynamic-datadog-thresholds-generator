import { useState } from "react";
import { EndpointStats } from "../../../types/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type EndpointStatisticsProps = {
  endpointStats: EndpointStats;
};

export const EndpointStatistics = ({
  endpointStats,
}: EndpointStatisticsProps) => {
  const [showStats, setShowStats] = useState(false);
  const insufficientData = endpointStats.numberOfElements < 4;
  const statsSectionId = "endpoint-highlights";
  return (
    <>
      <div>
        <div className="flex">
          <button
            onClick={() => setShowStats((prevValue) => !prevValue)}
            aria-controls={statsSectionId}
          >
            <KeyboardArrowDownIcon />
            Show endpoint insights
          </button>
        </div>
      </div>
      {showStats && (
        <div aria-expanded={showStats} id={statsSectionId}>
          <p>
            <strong>Sorted percentiles:</strong> [{endpointStats.sorted}]
          </p>
          <p>
            <strong>Number of values analyzed:</strong>
            {endpointStats.numberOfElements}
          </p>
          <p>
            <strong>Minimum:</strong> {endpointStats.minimum}
            <strong>Maximum:</strong> {endpointStats.maximum}
            <strong>Average:</strong> {endpointStats.average}
            <strong>Median:</strong> {endpointStats.median}
          </p>
          {insufficientData && (
            <p>
              <i>
                <strong>Note:</strong> Not enough data: enter more than four
                values for a more accurate result.
              </i>
            </p>
          )}
        </div>
      )}
    </>
  );
};
