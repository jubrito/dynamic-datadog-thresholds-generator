import { Percentile } from "../../../types/generator";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";

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
      <div className="flex md:gap-5 flex-col md:flex-row px-5">
        {warningThreshold != null && (
          <div className="p-4 bg-white/7 rounded-lg font-bold text-2xl flex items-center mt-6 gap-4">
            <WarningIcon className="text-orange-500" fontSize="large" />
            <span>Warning threshold</span>
            <span className="px-2 py-1 rounded-lg bg-orange-600">
              {warningThreshold}
            </span>
          </div>
        )}
        {criticalThreshold != null && (
          <div className="p-4 bg-white/7 rounded-lg font-bold text-2xl flex items-center mt-6 gap-4">
            <ErrorIcon className="text-pink-500" fontSize="large" />
            <span>Critical threshold</span>
            <span className="px-2 py-1 rounded-lg bg-pink-600">
              {criticalThreshold}
            </span>
          </div>
        )}
        {/* <p className="font-bold mt-6 text-lg p-2 bg-[#F66500] min-w-60 xl:w-1/6 w-full rounded-lg">
          Warning threshold: {warningThreshold}
        </p> */}
        {/* {criticalThreshold != null && (
          <p className="font-bold mt-6 p-2 pl-5 text-lg bg-pink-500 min-w-60 xl:w-1/6 w-full rounded-lg">
            Critical threshold: {criticalThreshold}
          </p>
        )} */}
      </div>
    </>
  );
};
