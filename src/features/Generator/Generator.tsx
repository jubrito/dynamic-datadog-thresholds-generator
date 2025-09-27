import { useState } from "react";
import { Configuration } from "../../components/Configuration/Configuration";
import type { ThresholdData, ThresholdsConfig } from "../../types/types";
import { UploadCsvBox } from "../../components/UploadCsvBox/UploadCsvBox";
import { mainTopSpacing, mainHorizontalSpacing } from "../../utils/styles";
import { Introduction } from "../../components/Introduction/Introduction";
import { GeneratorResults } from "../../components/GeneratorResults/GeneratorResults";

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
  const showInsights = thresholdData.metricValues.length > 0;

  return (
    <section className={`py-10 ${mainHorizontalSpacing} ${mainTopSpacing}`}>
      <div />
      <div className={`grid gap-7 ${showInsights ? "grid-rows-2" : ""}`}>
        <div className="grid gap-11 8xl:grid-cols-[minmax(300px,600px)_minmax(auto,600px)] xl:grid-cols-[minmax(30px,600px)_minmax(object-fit,600px)] grid-cols-1">
          <div className="xl:col-span-2">
            <Introduction />
          </div>
          <UploadCsvBox updateThresholdData={setThresholdData} />
          <Configuration
            thresholdsConfig={thresholdsConfig}
            updateThresholdsConfig={setThresholdsConfig}
          />
        </div>
        <GeneratorResults
          thresholdData={thresholdData}
          thresholdsConfig={thresholdsConfig}
        />
      </div>
      <div />
    </section>
  );
};
