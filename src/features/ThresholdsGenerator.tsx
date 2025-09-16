import { useState } from "react";
import type { ThresholdData, ThresholdsConfig } from "../types/types";
import { UploadCsvBox } from "../components/UploadCsvBox/UploadCsvBox";
import { Thresholds } from "../components/Thresholds/Thresholds";
import { Documentation } from "../components/Documentation/Documentation";

type ThresholdsGeneratorProps = {
  thresholdsConfig: ThresholdsConfig;
};

export const ThresholdsGenerator = ({
  thresholdsConfig,
}: ThresholdsGeneratorProps) => {
  const [thresholdData, setThresholdData] = useState<ThresholdData>({
    metricValues: [],
  });

  return (
    <section className="flex flex-col gap-6 text-left">
      <h1 className="font-bold text-3xl uppercase">
        Dynamic Threshold Generator
      </h1>
      <h3 className="text-lg">
        <span id="extract-and-upload-csv-description">
          Extract a Datadog endpoint metrics csv file using any percentile
          aggregation and upload it to generate warning and critical thresholds
          suggestions.
        </span>
        <span className="pl-1" id="configure-generator-description">
          Decide how rigorous you want to be by adjusting the configuration
          values at any time.
        </span>
      </h3>
      <Documentation />
      <UploadCsvBox setThresholdData={setThresholdData} />
      <Thresholds
        endpointName={thresholdData.endpointPath}
        percentileValues={thresholdData.metricValues}
        thresholdsConfig={thresholdsConfig}
      />
    </section>
  );
};
