import { OpenDocumentationSection } from "../../../../types/types";
import { closeDocumentationSections } from "../../../../utils/constants";
import { Divider } from "../../../Divider/Divider";
import { PreviousNextButtons } from "../../../PreviousNextButtons/PreviousNextButtons";
import MonitorConfigExample from "../../../../assets/datadog-monitor-config-example.jpg";

type MonitorConfigurationProps = {
  openDocumentation: React.Dispatch<
    React.SetStateAction<OpenDocumentationSection>
  >;
};

export const MonitorConfiguration = ({
  openDocumentation,
}: MonitorConfigurationProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Monitor Configuration</h1>
      <p className="text-2xl">How to configure and analyze Datadog monitors?</p>
      <div>
        <p className="mb-4">
          <span className="text-cyan-600 text-2xl font-bold px-5">1.</span>
          <span className="bg-cyan-600 text-lg font-bold text-black p-1 px-3 mb-2 w-max text-left">
            Define a query to extract metrics
          </span>
        </p>
        <p>
          Example: Retrieve the median of the request time in milliseconds for
          all endpoints X in production
        </p>
      </div>
      <div>
        <p className="mb-4">
          <span className="text-pink-600 text-2xl font-bold px-5">2.</span>
          <span className="bg-pink-600 text-lg font-bold text-white p-1 px-3 mb-2 w-max text-left">
            Define a formula
          </span>
        </p>
        <p>
          Example: Convert the request time in milliseconds to request time
          seconds
        </p>
      </div>
      <div>
        <p className="mb-4">
          <span className="text-green-600 text-2xl font-bold px-5">3.</span>
          <span className="bg-green-600 text-lg font-bold text-black p-1 px-3 mb-2 w-max text-left">
            Define the evaluation details
          </span>
        </p>
        <p>
          Example: Evaluate the average of the query over the last 15 minutes
        </p>
      </div>
      <div>
        <p className="mb-4">
          <span className="text-indigo-600 text-2xl font-bold px-5">4.</span>
          <span className="bg-indigo-600 text-lg font-bold text-white p-1 px-3 mb-2 w-max text-left">
            Define the thresholds
          </span>
        </p>
        <p>
          Example: Trigger alert when the evaluated value (from query) is above
          the alert threshold 6
        </p>
      </div>
      <Divider />
      <p className="not-sr-only text-xl">
        Example of a Datadog monitor configuration page:
      </p>
      <img
        src={MonitorConfigExample}
        alt=""
        className="w-full min-w-80 float-left mb-3"
      />
      <Divider />
      <PreviousNextButtons
        previous={{
          label: "Thresholds",
          action: () =>
            openDocumentation({
              ...closeDocumentationSections,
              thresholds: true,
            }),
        }}
      />
    </div>
  );
};
