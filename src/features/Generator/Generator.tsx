import { useState } from "react";
import { Configuration } from "../../components/Configuration/Configuration";
import { ThresholdsGenerator } from "../ThresholdsGenerator/ThresholdsGenerator";
import type { ThresholdData, ThresholdsConfig } from "../../types/types";
import { getSortedAscending, getStatistics } from "../../utils/utils";
import { EndpointStatistics } from "../../components/ThresholdResults/Statistics/Statistics";

export const Generator = () => {
  const [thresholdsConfig, setThresholdsConfig] = useState<ThresholdsConfig>({
    critical: {
      factor: 95,
      percentile: 99,
    },
    warning: {
      factor: 80,
      percentile: 95,
    },
  });
  const [thresholdData, setThresholdData] = useState<ThresholdData>({
    metricValues: [],
  });
  const percentileValues = thresholdData.metricValues;
  const sortedPercentileValues = getSortedAscending(percentileValues);
  const percentileStats = getStatistics(sortedPercentileValues);

  return (
    <section className="grid xl:grid-cols-2 grid-cols-2 grid-rows-1 gap-7">
      <div className="col-span-2 max-h-min text-left">
        <h1 className="font-bold text-3xl uppercase">
          Dynamic Threshold Generator
        </h1>
        <h3 className="text-lg mt-3">
          <span id="extract-and-upload-csv-description">
            Extract a Datadog endpoint metrics csv file using any percentile
            aggregation and upload it to generate warning and critical
            thresholds suggestions.
          </span>
          <span className="pl-1" id="configure-generator-description">
            Decide how rigorous you want to be by adjusting the configuration
            values at any time.
          </span>
        </h3>
      </div>
      <ThresholdsGenerator
        thresholdsConfig={thresholdsConfig}
        thresholdData={thresholdData}
        updateThresholdData={setThresholdData}
      />
      <Configuration
        thresholdsConfig={thresholdsConfig}
        updateThresholdsConfig={setThresholdsConfig}
      />
      <div className="col-span-2 max-h-min text-left">
        <EndpointStatistics
          endpointStats={percentileStats}
          showInsights={thresholdData.metricValues.length > 0}
        />
      </div>
    </section>
  );
};
