import DatadogLogo from "../../../../assets/datadog-logo.jpg";
import { OpenDocumentationSection } from "../../../../types/types";
import { closeDocumentationSections } from "../../../../utils/constants";
import { ColorBox } from "../../../ColorBox/ColorBox";
import { Divider } from "../../../Divider/Divider";
import { PreviousNextButtons } from "../../../PreviousNextButtons/PreviousNextButtons";

type DatadogProps = {
  openDocumentation: React.Dispatch<
    React.SetStateAction<OpenDocumentationSection>
  >;
};

export const Datadog = ({ openDocumentation }: DatadogProps) => {
  return (
    <>
      <div className="flex xl:flex-nowrap flex-wrap flex-row gap-5">
        <div className="min-w-full h-80 max-h-70 xl:h-auto xl:max-h-unset bg-[#100860] relative  xl:max-w-280 xl:min-w-80">
          <h1 className="text-4xl font-bold block xl:hidden mb-5">Datadog</h1>
          <div className="absolute inset-0 flex items-center justify-center xl:block">
            <img
              src={DatadogLogo}
              alt="Datadog"
              className="w-full h-full object-cover min-w-full xl:min-h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold hidden xl:block">Datadog</h1>
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
            monitoring, and more. One of its most powerful features are
            <span className="text-indigo-300 font-bold pl-1">
              monitors with automated alerts that help teams detect when systems
              degrade or fail.
            </span>
          </p>
          <ColorBox style="bg-indigo-800 text-white">
            But how to define if a system is degrading or failing?
          </ColorBox>
        </div>
      </div>
      <p className="py-5">
        When configuring monitors, you can define thresholds to create alerts
        and receive notifications about your endpoints.
      </p>
      <Divider />
      <PreviousNextButtons
        previous={{
          label: "Observability",
          action: () =>
            openDocumentation({
              ...closeDocumentationSections,
              observability: true,
            }),
        }}
        next={{
          label: "Thresholds",
          action: () =>
            openDocumentation({
              ...closeDocumentationSections,
              thresholds: true,
            }),
        }}
      />
    </>
  );
};
