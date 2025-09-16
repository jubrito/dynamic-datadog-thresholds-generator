import type { ThresholdConfig } from "../../../types/types";
import { RangeConfig } from "./RangeConfig/RangeConfig";

type ConfigOptionsProps = {
  thresholdType: "Critical" | "Warning";
  defaultPercentile: number;
  defaultFactor: number;
  updateConfig: (config: {
    factor?: ThresholdConfig["factor"];
    percentile?: ThresholdConfig["factor"];
  }) => void;
};

export const ConfigOptions = ({
  thresholdType,
  defaultPercentile,
  defaultFactor,
  updateConfig,
}: ConfigOptionsProps) => {
  return (
    <div className="flex w-max flex-col bg-[#171929] p-3 rounded-md">
      <p className="font-bold text-xl text-left">{thresholdType} Threshold</p>
      <RangeConfig
        defaultValue={defaultPercentile}
        labels={{
          field: "Base percentile",
          highLabel: "Slower",
          lowLabel: "Faster",
          rangeBarLabel: "Type of request to focus",
        }}
        rangeFieldId={`${thresholdType}-base-percentile`}
        updateConfigProperty={(percentile) => updateConfig({ percentile })}
      />
      <RangeConfig
        defaultValue={defaultFactor}
        labels={{ field: "Rigorour factor" }}
        rangeFieldId={`${thresholdType}-rigour-factor`}
        updateConfigProperty={(factor) => updateConfig({ factor })}
      />
    </div>
  );
};
