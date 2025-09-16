import type { EndpointStats, Percentile } from "../../types/types";
import { EndpointStatistics } from "./Statistics/Statistics";

type ThresholdProps = {
  endpointStats: EndpointStats;
  warningThreshold?: Percentile;
  criticalThreshold?: Percentile;
};

export const ThresholdResults = ({
  endpointStats,
  warningThreshold,
  criticalThreshold,
}: ThresholdProps) => {
  return (
    <>
      <div>
        <div className="flex gap-5">
          <h3 className="font-bold text-xl my-5 p-2 bg-pink-500 w-1/2">
            Critical Threshold {criticalThreshold}
          </h3>
          <h3 className="font-bold my-5 text-xl p-2 bg-[#F66500] w-1/2">
            Warning Threshold {warningThreshold}
          </h3>
        </div>
      </div>
      <EndpointStatistics endpointStats={endpointStats} />
    </>
  );
};
