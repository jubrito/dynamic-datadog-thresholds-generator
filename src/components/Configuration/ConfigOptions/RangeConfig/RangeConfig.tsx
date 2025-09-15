import { useState } from "react";

type RangeConfigProps = {
  rangeFieldId: string;
  defaultValue: number;
  labels: {
    field: string;
    rangeBarLabel?: string;
    lowLabel?: string;
    highLabel?: string;
  };
};

export const RangeConfig = ({
  rangeFieldId,
  defaultValue,
  labels,
}: RangeConfigProps) => {
  const [value, setValue] = useState(defaultValue);
  const lowLabel = labels?.lowLabel || "Lower";
  const highLabel = labels?.highLabel || "Higher";
  const rangeBarLabel = labels?.rangeBarLabel || "Rigorousness";
  const accentColor = value >= 50 ? "accent-cyan-500" : "accent-white";

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Math.round(parseInt(event.target.value)));
  };

  return (
    <div className="mt-5">
      <div className="flex items-center">
        <label className="text-xl" htmlFor={rangeFieldId}>
          {labels.field}
        </label>
        <input
          id={rangeFieldId}
          className="ml-3 bg-gray-900 pl-2 text-center"
          type="number"
          min="1"
          max="99"
          value={value}
          onChange={handleRangeChange}
        />
      </div>
      <>
        <div className="w-max">
          <p className="inline text-sm font-italic">{lowLabel}</p>
          <input
            type="range"
            className={`w-23 h-auto inline mx-3 align-middle ${accentColor}`}
            min="0"
            max="99"
            value={value}
            onChange={handleRangeChange}
          />

          <p className="inline text-sm">{highLabel}</p>
        </div>
        <p className="text-sm italic">{rangeBarLabel}</p>
      </>
    </div>
  );
};
