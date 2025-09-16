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
      <h1 className="font-bold text-3xl">
        Dynamic Datadog Threshold Generator
      </h1>
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
