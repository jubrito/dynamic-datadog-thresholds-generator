import type { EndpointStats, Percentile } from "../../types/types";

type ThresholdProps = {
  endpointStats: EndpointStats;
  warningThreshold?: Percentile;
  criticalThreshold?: Percentile;
};

export const ThresholdResults = ({
  warningThreshold,
  criticalThreshold,
}: ThresholdProps) => {
  return (
    <>
      <div className="flex gap-5">
        <h3 className="font-bold mt-6 text-lg p-2 bg-[#F66500] w-full rounded-lg">
          Warning threshold: {warningThreshold}
        </h3>
        <h3 className="font-bold mt-6 p-2 pl-5 text-lg bg-pink-500 w-full rounded-lg">
          Critical threshold: {criticalThreshold}
        </h3>
      </div>
    </>
  );
};
