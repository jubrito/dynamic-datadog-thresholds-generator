import type { Percentile, ThresholdsConfig } from "../../types/types";
import { computeAdaptiveThresholds } from "../../utils/thresholds";
import { ThresholdResults } from "../ThresholdResults/ThresholdResults";

type ThresholdsProps = {
  endpointName?: string;
  sortedPercentileValues: Percentile[];
  thresholdsConfig: ThresholdsConfig;
};

export const Thresholds = ({
  endpointName,
  sortedPercentileValues,
  thresholdsConfig,
}: ThresholdsProps) => {
  const { warningThreshold, criticalThreshold } = computeAdaptiveThresholds(
    sortedPercentileValues,
    thresholdsConfig
  );
  const resultsWereGenerated =
    endpointName && sortedPercentileValues.length > 0;

  return (
    <section
      role="region"
      className={`${
        resultsWereGenerated ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 rounded-xl pb-7`}
    >
      {resultsWereGenerated && (
        <>
          <h2 className="font-bold text-2xl">
            <span className="sr-only">Endpoint name: </span>
            {endpointName}
          </h2>
          <ThresholdResults
            warningThreshold={warningThreshold}
            criticalThreshold={criticalThreshold}
          />
        </>
      )}
    </section>
  );
};
