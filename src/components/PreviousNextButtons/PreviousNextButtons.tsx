import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router";

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
  return (
    <div className="flex justify-between">
      {previous && (
        <Link
          to={previous.path}
          className={
            "relative group text-lg hover:text-white cursor-pointer w-fit"
          }
          role="button"
        >
          <span>
            {<ArrowLeftIcon aria-hidden="true" />}
            <span
              className="font-bold"
              aria-label={`Previous page: ${previous.label}`}
            >
              Previous: {previous.label}
            </span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
        </Link>
      )}
      {next && (
        <Link
          to={next.path}
          className={
            "relative group text-lg hover:text-white cursor-pointer w-fit"
          }
          role="button"
        >
          <span>
            <span className="font-bold" aria-label={`Next page: ${next.label}`}>
              Next: {next.label}
            </span>
            {<ArrowRightIcon aria-hidden="true" />}
          </span>
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
        </Link>
      )}
    </div>
  );
};
