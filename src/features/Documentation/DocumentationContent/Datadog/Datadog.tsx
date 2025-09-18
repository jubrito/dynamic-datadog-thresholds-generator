import DatadogLogo from "../../../../assets/datadog-logo.jpg";
import { OpenDocumentationSection } from "../../../../types/types";
import { closeDocumentationSections } from "../../../../utils/constants";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type DatadogProps = {
  openDocumentation: React.Dispatch<
    React.SetStateAction<OpenDocumentationSection>
  >;
};

export const Datadog = ({ openDocumentation }: DatadogProps) => {
  return (
    <>
      <div className="flex">
        <img
          src={DatadogLogo}
          alt=""
          className="w-130 min-w-80 float-left mr-10"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Datadog</h1>
          <p>
            <a
              href="https://www.datadoghq.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline mr-1"
            >
              Datadog
            </a>
            is a leading full-stack observability platform that automates
            application performance monitoring, log management, infrastructure
            monitoring, and more. One of its most powerful features are{" "}
            <span className="text-indigo-300 font-bold">
              monitors with automated alerts that help teams detect when systems
              degrade or fail.
            </span>
          </p>
          <span className="bg-indigo-800 p-3 px-15 w-130">
            But how to define if a system is degrading or failing?
          </span>
        </div>
      </div>
      <p className="py-5">
        When configuring monitors, you can define thresholds to create alerts
        and receive notifications about your endpoints.
      </p>
      <div className="py-4">
        <hr />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() =>
            openDocumentation({
              ...closeDocumentationSections,
              observability: true,
            })
          }
          className={
            "relative group text-lg hover:text-white cursor-pointer w-fit"
          }
        >
          <span>
            {<ArrowLeftIcon />}
            <span className="font-bold">Previous: Observability</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
        </button>
        <button
          onClick={() =>
            openDocumentation({
              ...closeDocumentationSections,
              thresholds: true,
            })
          }
          className={
            "relative group text-lg hover:text-white cursor-pointer w-fit"
          }
        >
          <span>
            <span className="font-bold">Next: Thresholds</span>
            {<ArrowRightIcon />}
          </span>
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
        </button>
      </div>
    </>
  );
};
