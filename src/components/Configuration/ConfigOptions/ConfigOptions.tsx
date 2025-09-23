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
    <div className="flex w-full flex-col bg-[#171929] p-6 rounded-md">
      <p className="font-bold text-xl text-left">{thresholdType} Threshold</p>
      <div className="flex xl:flex-col flex-wrap justify-between">
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
          limits={{
            min: 1,
            max: 99,
          }}
        />
        <RangeConfig
          defaultValue={defaultFactor}
          labels={{ field: "Rigorour factor" }}
          rangeFieldId={`${thresholdType}-rigour-factor`}
          updateConfigProperty={(factor) => updateConfig({ factor })}
          limits={{
            min: 0,
            max: 150,
          }}
        />
      </div>
    </div>
  );
};
