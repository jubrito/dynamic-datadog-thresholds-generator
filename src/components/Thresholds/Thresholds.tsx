import type { Percentile, ThresholdsConfig } from "../../types/types";
import { computeAdaptiveThresholds } from "../../utils/thresholds";
import { getSortedAscending, getStatistics } from "../../utils/utils";
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
  const percentileStats = getStatistics(sortedPercentileValues);
  const { warningThreshold, criticalThreshold } = computeAdaptiveThresholds(
    sortedPercentileValues,
    thresholdsConfig
  );

  return (
    <section className="bg-[#11131f] border-white border-1 rounded-xl p-8">
      {endpointName && (
        <h2 className="underscore font-bold text-2xl">{endpointName}</h2>
      )}

      {sortedPercentileValues.length > 0 && (
        <ThresholdResults
          endpointStats={percentileStats}
          warningThreshold={warningThreshold}
          criticalThreshold={criticalThreshold}
        />
      )}
    </section>
  );
};
