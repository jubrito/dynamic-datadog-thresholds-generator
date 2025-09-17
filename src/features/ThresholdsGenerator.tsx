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
    <section className="flex flex-col gap-4 text-left bg-[#0f131e] p-5 rounded-xl">
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
