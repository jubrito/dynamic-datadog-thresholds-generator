import { useState } from "react";
import { Configuration } from "../../components/Configuration/Configuration";
import type { ThresholdData, ThresholdsConfig } from "../../types/types";
import { getSortedAscending, getStatistics } from "../../utils/utils";
import { EndpointStatistics } from "../../components/ThresholdResults/Statistics/Statistics";
import { mainGridStyle } from "../../utils/styles";
import { Thresholds } from "../../components/Thresholds/Thresholds";
import { UploadCsvBox } from "../../components/UploadCsvBox/UploadCsvBox";

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
  const showInsights = thresholdData.metricValues.length > 0;
  const showMainStyleTransition = showInsights
    ? "bg-[#0f131e] border-3 border-[#0f131e]"
    : "bg-transparent";

  return (
    <section className="p-13">
      <div className="grid grid-cols-1 grid-rows-2 gap-7">
        <div className={mainGridStyle}>
          <div className="col-start-2">
            <div className="max-h-min text-left">
              <h1 className="font-bold text-3xl uppercase">
                Dynamic Threshold Generator
              </h1>
              <h3 className="text-lg mt-3">
                <span id="extract-and-upload-csv-description">
                  Extract a Datadog endpoint metrics csv file using any
                  percentile aggregation and upload it to generate warning and
                  critical thresholds suggestions.
                </span>
                <span className="pl-1" id="configure-generator-description">
                  Decide how rigorous you want to be by adjusting the
                  configuration values at any time.
                </span>
              </h3>
            </div>
            <UploadCsvBox updateThresholdData={setThresholdData} />
          </div>
          <div className="col-start-3">
            <Configuration
              thresholdsConfig={thresholdsConfig}
              updateThresholdsConfig={setThresholdsConfig}
            />
          </div>
        </div>
        <div className={`${mainGridStyle} max-h-min text-left`}>
          <div
            className={`${showMainStyleTransition} h-min p-5 rounded-xl col-start-2 col-end-4`}
          >
            <Thresholds
              endpointName={thresholdData.endpointPath}
              percentileValues={thresholdData.metricValues}
              thresholdsConfig={thresholdsConfig}
            />
            <EndpointStatistics
              endpointStats={percentileStats}
              showInsights={showInsights}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
