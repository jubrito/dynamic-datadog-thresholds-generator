import type { Percentile, ThresholdsConfig } from "../../../types/generator";
import { computeAdaptiveThresholds } from "../../../utils/thresholds";
import { ThresholdResults } from "../../../features/Generator/ThresholdResults/ThresholdResults";
import { stylesDarkGrayBlue } from "../../../utils/styles";

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
      } transition-opacity duration-500 rounded-xl`}
      aria-live="polite"
    >
      {resultsWereGenerated && (
        <>
          <h2
            className={`p-5 text-3xl ${stylesDarkGrayBlue.background}`}
            aria-label={`Results for endpoint ${endpointName}`}
          >
            <span className="text-white/80">Results for</span>
            <span className="font-bold pl-2">{endpointName}</span>
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
