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
        <div className="flex gap-5">
          <h3 className="font-bold text-xl my-5 p-2 bg-pink-500 w-max">
            Critical Threshold {criticalThreshold}
          </h3>
          <h3 className="font-bold my-5 text-xl p-2 bg-[#F66500] w-max">
            Warning Threshold {warningThreshold}
          </h3>
        </div>
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
