import { Percentile } from "../../types/types";

type ThresholdProps = {
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
        {warningThreshold != null && (
          <p
            className="font-bold mt-6 text-lg p-2 bg-[#F66500] min-w-60 w-1/6 rounded-lg"
            aria-live="polite"
          >
            Warning threshold: {warningThreshold}
          </p>
        )}
        {criticalThreshold != null && (
          <p
            className="font-bold mt-6 p-2 pl-5 text-lg bg-pink-500 min-w-60 w-1/6 rounded-lg"
            aria-live="polite"
          >
            Critical threshold: {criticalThreshold}
          </p>
        )}
      </div>
    </>
  );
};
