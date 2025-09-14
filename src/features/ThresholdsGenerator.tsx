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
    <>
      <h1>Dynamic Threshold Generator for Datadog Monitors</h1>
      <Documentation />
      <UploadCsvBox setThresholdData={setThresholdData} />
      <Thresholds
        endpointName={thresholdData.endpointPath}
        percentileValues={thresholdData.metricValues}
      />
    </>
  );
};
