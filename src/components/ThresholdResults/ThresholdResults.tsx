import type { EndpointStats, Percentile } from "../../types/types";

type ThresholdProps = {
  endpointStats: EndpointStats;
  warningThreshold?: Percentile;
  criticalThreshold?: Percentile;
};

export const ThresholdResults = ({
  endpointStats,
  warningThreshold,
  criticalThreshold,
}: ThresholdProps) => {
  const insufficientData = endpointStats.numberOfElements < 4;

  return (
    <>
      <div>
        <strong>
          <ul>
            <li>
              <h3>Suggested CRITICAL Threshold: {criticalThreshold}</h3>
            </li>
            <li>
              <h3>Suggested WARNING Threshold: {warningThreshold}</h3>
            </li>
          </ul>
        </strong>
        <p>
          <strong>Sorted percentiles:</strong> [{endpointStats.sorted}]
        </p>
        <p>
          <strong>Number of values analyzed:</strong>{" "}
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
    </>
  );
};
