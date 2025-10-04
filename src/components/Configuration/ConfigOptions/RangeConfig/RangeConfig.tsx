import { useState } from "react";
import type { ThresholdConfig } from "../../../../types/types";

type RangeConfigProps = {
  rangeFieldId: string;
  defaultValue: number;
  labels: {
    field: string;
    rangeBarLabel?: string;
    lowLabel?: string;
    highLabel?: string;
  };
  limits: {
    min: number;
    max: number;
  };
  updateConfigProperty: (
    config: ThresholdConfig["percentile"] | ThresholdConfig["factor"]
  ) => void;
};

export const RangeConfig = ({
  rangeFieldId,
  defaultValue,
  labels,
  updateConfigProperty,
  limits,
}: RangeConfigProps) => {
  const [value, setValue] = useState(defaultValue);
  const lowLabel = labels?.lowLabel || "Lower";
  const highLabel = labels?.highLabel || "Higher";
  const rangeBarLabel = labels?.rangeBarLabel || "Rigorousness";
  const accentColor = value >= 50 ? "accent-cyan-500" : "accent-white";

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = Math.round(parseInt(event.target.value));
    setValue(updatedValue);
    updateConfigProperty(updatedValue);
  };

  return (
    <div className="mt-5 xl:mr-0 mr-6">
      <div className="flex items-center">
        <label className="text-md" htmlFor={rangeFieldId}>
          {labels.field}
        </label>
        <input
          id={rangeFieldId}
          className="ml-3 bg-black pl-3 py-1 rounded-md text-center"
          type="number"
          aria-valuemin={limits.min}
          aria-valuemax={limits.max}
          aria-valuenow={value}
          min={limits.min}
          max={limits.max}
          value={value}
          onChange={handleRangeChange}
        />
      </div>
      <>
        <div className="w-max">
          <p className="inline text-sm italic">{lowLabel}</p>
          <input
            type="range"
            className={`h-auto w-17 inline mx-4 my-2 align-middle ${accentColor}`}
            aria-valuemin={limits.min}
            aria-valuemax={limits.max}
            aria-valuenow={value}
            min={limits.min}
            max={limits.max}
            value={value}
            onChange={handleRangeChange}
          />

          <p className="inline text-sm italic">{highLabel}</p>
        </div>
        <p className="text-sm text-left">{rangeBarLabel}</p>
      </>
    </div>
  );
};
