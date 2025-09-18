import { OpenDocumentationSection } from "../../../../types/types";
import { closeDocumentationSections } from "../../../../utils/constants";
import { Divider } from "../../../Divider/Divider";
import { PreviousNextButtons } from "../../../PreviousNextButtons/PreviousNextButtons";

type ThresholdsProps = {
  openDocumentation: React.Dispatch<
    React.SetStateAction<OpenDocumentationSection>
  >;
};

export const Thresholds = ({ openDocumentation }: ThresholdsProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Thresholds</h1>
      <p className="text-2xl">What is it and why does it matter?</p>
      <p>
        Thresholds are predefined
        <span className="text-pink-300 font-bold mr-1 mx-1">
          values that trigger alerts
        </span>
        when a metric crosses them. They act as boundaries for monitoring
        conditions, allowing you to define
        <span className="font-bold">
          when a system is considered to be in an
          <span className="text-pink-300 mx-1">alert</span> or
          <span className="text-orange-300 mx-1">warning</span> state.
        </span>
      </p>
      <Divider />
      <div>
        <p className="font-bold text-lg">
          When defining thresholds, static and arbitrary values should be
          avoided as they can lead to:
        </p>
        <ul className="list-inside list-disc">
          <li className="py-4">Noisy alerts.</li>
          <li>Missed anomalies.</li>
        </ul>
      </div>
      <span className="bg-pink-600 p-3 px-7 w-fit font-bold text-lg">
        But how to set appropriate thresholds values when configuring alerts?
      </span>
      <Divider />
      <PreviousNextButtons
        previous={{
          label: "Datadog",
          action: () =>
            openDocumentation({
              ...closeDocumentationSections,
              datadog: true,
            }),
        }}
        next={{
          label: "Monitor Configuration",
          action: () =>
            openDocumentation({
              ...closeDocumentationSections,
              monitorConfiguration: true,
            }),
        }}
      />
    </div>
  );
};
