import { useState } from "react";
import { Line } from "@rc-component/progress";

type ConfigOptionsProps = {
  thresholdOption: string;
};

export const ConfigOptions = ({ thresholdOption }: ConfigOptionsProps) => {
  const [percentile, setPercentile] = useState(95);

  const handlePercentileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPercentile(Math.round(parseInt(event.target.value)));
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <p className="text-2xl">{thresholdOption} Threshold</p>
      <div className="flex items-center">
        <p className="text-xl">Base percentile</p>
        <input
          className="ml-5 bg-gray-900 pl-5 text-center"
          type="number"
          min="1"
          max="99"
          value={percentile}
          onChange={handlePercentileChange}
        />
      </div>
      <div>
        <div>
          <p className="inline text-sm">Low</p>
          <Line
            className="w-32 h-auto inline mx-3"
            percent={percentile}
            strokeWidth={2}
          />
          <p className="inline text-sm">High</p>
        </div>
        <p className="pl-15 text-sm">rigorousness</p>
      </div>
    </div>
  );
};
