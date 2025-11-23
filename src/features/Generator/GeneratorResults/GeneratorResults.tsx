import { useEffect, useRef } from "react";
import { getSortedAscending, getStatistics } from "../../../utils/utils";
import { EndpointStatistics } from "../../../features/Generator/ThresholdResults/EndpointStatistics/EndpointStatistics";
import { stylesGrayerDarkGrayBlue } from "../../../utils/styles";
import { isDataSufficient } from "../../../utils/statistics";
import { ThresholdData, ThresholdsConfig } from "../../../types/generator";
import { Thresholds } from "../Thresholds/Thresholds";

type GeneratorResultsProps = {
  thresholdData: ThresholdData;
  thresholdsConfig: ThresholdsConfig;
};
export const GeneratorResults = ({
  thresholdData,
  thresholdsConfig,
}: GeneratorResultsProps) => {
  const percentileValues = thresholdData.metricValues;
  const sortedPercentileValues = getSortedAscending(percentileValues);
  const percentileStats = getStatistics(sortedPercentileValues);
  const showInsights = thresholdData.metricValues.length > 0;
  const enoughDataForInsights = isDataSufficient(percentileValues.length);
  const showMainStyleTransition = showInsights
    ? `${stylesGrayerDarkGrayBlue.background} ${
        enoughDataForInsights ? "" : "max-h-124"
      } mt-5`
    : "bg-transparent max-h-0 mt-0";

  const resultsRef = useRef<HTMLDivElement>(null);

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    if (showInsights) {
      scrollToResults();
    }
  }, [showInsights]);

  if (!showInsights) return null;

  return (
    <div
      className={`${showMainStyleTransition} h-min text-left border-0 transition-all duration-1000 ease-in-out ease-out overflow-hidden h-min p-5 rounded-xl`}
      ref={resultsRef}
    >
      <>
        <Thresholds
          endpointName={thresholdData.endpointPath}
          sortedPercentileValues={sortedPercentileValues}
          thresholdsConfig={thresholdsConfig}
        />
        <EndpointStatistics
          endpointStats={percentileStats}
          showInsights={showInsights}
        />
      </>
    </div>
  );
};
