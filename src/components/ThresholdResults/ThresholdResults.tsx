import { Percentile } from "../../types/types";

type ThresholdProps = {
  warningThreshold?: Percentile;
  criticalThreshold?: Percentile;
};

export const ThresholdResults = ({
  warningThreshold,
  criticalThreshold,
}: ThresholdProps) => {
  if (warningThreshold == null && criticalThreshold == null) return null;

  return (
    <>
      <div className="flex md:gap-5 flex-col md:flex-row">
        {warningThreshold != null && (
          <p className="font-bold mt-6 text-lg p-2 bg-[#F66500] min-w-60 xl:w-1/6 w-full rounded-lg">
            Warning threshold: {warningThreshold}
          </p>
        )}
        {criticalThreshold != null && (
          <p className="font-bold mt-6 p-2 pl-5 text-lg bg-pink-500 min-w-60 xl:w-1/6 w-full rounded-lg">
            Critical threshold: {criticalThreshold}
          </p>
        )}
      </div>
    </>
  );
};
