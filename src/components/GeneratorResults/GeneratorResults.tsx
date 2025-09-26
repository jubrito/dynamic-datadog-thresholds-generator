import { useEffect, useRef } from "react";
import { ThresholdData, ThresholdsConfig } from "../../types/types";
import { getSortedAscending, getStatistics } from "../../utils/utils";
import { EndpointStatistics } from "../ThresholdResults/Statistics/Statistics";
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
  const showMainStyleTransition = showInsights
    ? "bg-[#0f131e] max-h-113 mt-5"
    : "bg-transparent max-h-0 mt-0";

  const resultsRef = useRef<HTMLDivElement>(null);

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!showInsights) return;
    scrollToResults();
  }, [showInsights]);

  return (
    <div
      className={`${showMainStyleTransition} xl:col-span-2 text-left border-0 transition-all duration-1000 ease-in-out ease-out overflow-hidden h-min p-5 rounded-xl`}
      ref={resultsRef}
    >
      <Thresholds
        endpointName={thresholdData.endpointPath}
        sortedPercentileValues={sortedPercentileValues}
        thresholdsConfig={thresholdsConfig}
      />
      <EndpointStatistics
        endpointStats={percentileStats}
        showInsights={showInsights}
      />
    </div>
  );
};
