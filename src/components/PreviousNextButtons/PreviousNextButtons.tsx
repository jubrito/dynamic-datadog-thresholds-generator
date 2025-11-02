import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { AnimatedBorderBottom } from "../AnimatedBorderBottom/AnimatedBorderBottom";

export type PreviousNextButtonsProps = {
  next?: {
    path: string;
    label: string;
  };
  previous?: {
    path: string;
    label: string;
  };
};
export const PreviousNextButtons = ({
  previous,
  next,
}: PreviousNextButtonsProps) => {
  const linkStyle = "font-bold text-lg hover:text-white cursor-pointer w-fit";
  return (
    <div className="flex justify-between">
      {previous && (
        <AnimatedBorderBottom
          borderStyle="bg-indigo-500"
          link={{
            path: previous.path,
            style: linkStyle,
            role: "button",
          }}
          aria-label={`Previous page: ${previous.label}`}
        >
          <span>
            {<ArrowLeftIcon aria-hidden="true" />}
            Previous: {previous.label}
          </span>
        </AnimatedBorderBottom>
      )}
      {next && (
        <AnimatedBorderBottom
          borderStyle="bg-indigo-500"
          link={{
            path: next.path,
            style: linkStyle,
            role: "button",
          }}
          aria-label={`Next page: ${next.label}`}
        >
          <span aria-hidden="true">
            Next: {next.label}
            {<ArrowRightIcon />}
          </span>
        </AnimatedBorderBottom>
      )}
    </div>
  );
};
