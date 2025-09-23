import type { Percentile, ThresholdsConfig } from "../../types/types";
import { computeAdaptiveThresholds } from "../../utils/thresholds";
import { getSortedAscending } from "../../utils/utils";
import { ThresholdResults } from "../ThresholdResults/ThresholdResults";

type ThresholdsProps = {
  endpointName?: string;
  percentileValues: Percentile[];
  thresholdsConfig: ThresholdsConfig;
};

export const Thresholds = ({
  endpointName,
  percentileValues,
  thresholdsConfig,
}: ThresholdsProps) => {
  const sortedPercentileValues = getSortedAscending(percentileValues);
  const { warningThreshold, criticalThreshold } = computeAdaptiveThresholds(
    sortedPercentileValues,
    thresholdsConfig
  );
  const resultsWereGenerated =
    endpointName && sortedPercentileValues.length > 0;

  return (
    <section role="region" aria-live="polite">
      <div
        className={`${
          resultsWereGenerated ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 rounded-xl pb-7`}
        aria-expanded={!!resultsWereGenerated}
      >
        <h2 className="font-bold text-2xl">
          <span className="sr-only">Endpoint name: </span>
          {endpointName}
        </h2>
        <ThresholdResults
          warningThreshold={warningThreshold}
          criticalThreshold={criticalThreshold}
        />
      </div>
    </section>
  );
};
