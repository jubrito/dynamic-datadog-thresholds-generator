import { useState } from "react";

type ConfigOptionsProps = {
  thresholdType: "Critical" | "Warning";
  defaultPercentile: number;
};

export const ConfigOptions = ({
  thresholdType,
  defaultPercentile,
}: ConfigOptionsProps) => {
  const [percentile, setPercentile] = useState(defaultPercentile);

  const handlePercentileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPercentile(Math.round(parseInt(event.target.value)));
  };

  return (
    <div className="flex w-max flex-col">
      <p className="text-2xl">{thresholdType} Threshold</p>
      <div className="mt-5">
        <div className="flex items-center">
          <p className="text-xl font-bold">Base percentile</p>
          <input
            className="ml-5 bg-gray-900 pl-4 text-center"
            type="number"
            min="1"
            max="99"
            value={percentile}
            onChange={handlePercentileChange}
          />
        </div>
        <>
          <div className="w-max mt-2">
            <p className="inline text-sm font-italic">Low</p>
            <input
              type="range"
              className="w-34 h-auto inline mx-3 align-middle"
              min="1"
              max="99"
              value={percentile}
              onChange={handlePercentileChange}
            />

            <p className="inline text-sm">High</p>
          </div>
          <p className="pl-15 text-sm italic">rigorousness</p>
        </>
      </div>
    </div>
  );
};
