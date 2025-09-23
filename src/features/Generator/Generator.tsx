import { useState } from "react";
import { Configuration } from "../../components/Configuration/Configuration";
import type { ThresholdData, ThresholdsConfig } from "../../types/types";
import { UploadCsvBox } from "../../components/UploadCsvBox/UploadCsvBox";
import { mainTopSpacing, mainVerticalSpacing } from "../../utils/styles";
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

  return (
    <section className={`p-10 ${mainVerticalSpacing} ${mainTopSpacing}`}>
      <div className="grid xl:grid-cols-2 grid-rows-2 gap-7">
        <div className="grid xl:grid-cols-2 xl:col-span-2 gap-7">
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
    </section>
  );
};
