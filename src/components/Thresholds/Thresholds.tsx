import type { percentile } from "../../types/types";
import { computeAdaptiveThresholds } from "../../utils/thresholds";
import { getSortedAscending, getStatistics } from "../../utils/utils";
import { ThresholdResults } from "../ThresholdResults/ThresholdResults";

type ThresholdsProps = {
  endpointName?: string;
  percentileValues: percentile[];
  warningThreshold?: number;
  criticalThreshold?: number;
};

export const Thresholds = ({
  endpointName,
  warningThreshold: receivedWarningThreshold,
  criticalThreshold: receivedCriticalThreshold,
  percentileValues,
}: ThresholdsProps) => {
  const sortedPercentileValues = getSortedAscending(percentileValues);
  const percentileStats = getStatistics(sortedPercentileValues);
  const { warningThreshold, criticalThreshold } = computeAdaptiveThresholds(
    sortedPercentileValues,
    {
      warning: {
        factor: 3,
        percentile: 95,
      },
      critical: {
        factor: 4,
        percentile: 99,
      },
    }
  );

  return (
    <>
      {endpointName && <h2>{endpointName}</h2>}
      {sortedPercentileValues.length > 0 && (
        <ThresholdResults
          endpointStats={percentileStats}
          warningThreshold={receivedWarningThreshold ?? warningThreshold}
          criticalThreshold={receivedCriticalThreshold ?? criticalThreshold}
        />
      )}
    </>
  );
};
