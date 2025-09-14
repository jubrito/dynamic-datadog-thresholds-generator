import type { P95Value } from "../../types/types";
import { computeAdaptiveThresholds } from "../../utils/thresholds";
import { getSortedAscending, getStatistics } from "../../utils/utils";
import { ThresholdResults } from "../ThresholdResults/ThresholdResults";

type ThresholdsProps = {
  endpointName?: string;
  p95Values: P95Value[];
  warningThreshold?: number;
  criticalThreshold?: number;
};

export const Thresholds = ({
  endpointName,
  warningThreshold: receivedWarningThreshold,
  criticalThreshold: receivedCriticalThreshold,
  p95Values,
}: ThresholdsProps) => {
  const sortedP95Values = getSortedAscending(p95Values);
  const p95stats = getStatistics(sortedP95Values);
  const { warningThreshold, criticalThreshold } = computeAdaptiveThresholds(
    sortedP95Values,
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
      {sortedP95Values.length > 0 && (
        <ThresholdResults
          endpointStats={p95stats}
          warningThreshold={receivedWarningThreshold ?? warningThreshold}
          criticalThreshold={receivedCriticalThreshold ?? criticalThreshold}
        />
      )}
    </>
  );
};
