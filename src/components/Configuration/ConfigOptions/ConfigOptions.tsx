import { RangeConfig } from "./RangeConfig/RangeConfig";

type ConfigOptionsProps = {
  thresholdType: "Critical" | "Warning";
  defaultPercentile: number;
  defaultFactor: number;
};

export const ConfigOptions = ({
  thresholdType,
  defaultPercentile,
  defaultFactor,
}: ConfigOptionsProps) => {
  return (
    <div className="flex w-max flex-col">
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
      />
      <RangeConfig
        defaultValue={defaultFactor}
        labels={{ field: "Rigorour factor" }}
        rangeFieldId={`${thresholdType}-rigour-factor`}
      />
    </div>
  );
};
