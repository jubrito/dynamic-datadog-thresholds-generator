import type { EndpointStats, P95Value } from "../../types/types";

type ThresholdProps = {
  endpointStats: EndpointStats;
  warningThreshold?: P95Value;
  criticalThreshold?: P95Value;
};

export const ThresholdResults = ({
  endpointStats,
  warningThreshold,
  criticalThreshold,
}: ThresholdProps) => {
  const insufficientData = endpointStats.numberOfElements < 4;

  return (
    <>
      <div className="content">
        <strong>
          <ul>
            <li className="critical">
              <h3>Suggested CRITICAL Threshold: {criticalThreshold}</h3>
            </li>
            <li className="warning">
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
          <span className="mr-10">, </span>
          <strong>Maximum:</strong> {endpointStats.maximum}
          <span className="mr-10">, </span>
          <strong>Average:</strong> {endpointStats.average}
          <span className="mr-10">, </span>
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
