import { useState } from "react";
import type { ThresholdData } from "../types/types";
import { UploadCsvBox } from "../components/UploadCsvBox/UploadCsvBox";
import { Thresholds } from "../components/Thresholds/Thresholds";
import { Documentation } from "../components/Documentation/Documentation";

export const ThresholdsGenerator = () => {
  const [thresholdData, setThresholdData] = useState<ThresholdData>({
    metricValues: [],
  });

  return (
    <section className="flex flex-col gap-6 text-left w-fit">
      <h1 className="text-4xl w-max">Dynamic Datadog Threshold Generator</h1>
      <Documentation />
      <UploadCsvBox setThresholdData={setThresholdData} />
      <Thresholds
        endpointName={thresholdData.endpointPath}
        percentileValues={thresholdData.metricValues}
      />
    </section>
  );
};
