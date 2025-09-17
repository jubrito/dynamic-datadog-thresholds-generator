import type { ThresholdData, ThresholdsConfig } from "../types/types";
import { UploadCsvBox } from "../components/UploadCsvBox/UploadCsvBox";
import { Thresholds } from "../components/Thresholds/Thresholds";
import { Documentation } from "../components/Documentation/Documentation";

type ThresholdsGeneratorProps = {
  thresholdsConfig: ThresholdsConfig;
  thresholdData: ThresholdData;
  updateThresholdData: React.Dispatch<React.SetStateAction<ThresholdData>>;
};

export const ThresholdsGenerator = ({
  thresholdsConfig,
  thresholdData,
  updateThresholdData,
}: ThresholdsGeneratorProps) => {
  return (
    <>
      <section className="flex flex-col gap-9 text-left bg-[#0f131e] p-5 rounded-xl">
        <Documentation />
        <UploadCsvBox setThresholdData={updateThresholdData} />
        <Thresholds
          endpointName={thresholdData.endpointPath}
          percentileValues={thresholdData.metricValues}
          thresholdsConfig={thresholdsConfig}
        />
      </section>
    </>
  );
};
