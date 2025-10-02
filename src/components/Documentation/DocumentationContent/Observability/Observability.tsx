import { OpenDocumentationSection } from "../../../../types/types";
import { closeDocumentationSections } from "../../../../utils/constants";
import { BorderBox } from "../../../BorderBox/BorderBox";
import { ColorBox } from "../../../ColorBox/ColorBox";
import { Divider } from "../../../Divider/Divider";
import { PreviousNextButtons } from "../../../PreviousNextButtons/PreviousNextButtons";

type ObservabilityProps = {
  openDocumentation: React.Dispatch<
    React.SetStateAction<OpenDocumentationSection>
  >;
};

export const Observability = ({ openDocumentation }: ObservabilityProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Observability</h1>
      <p className="text-2xl">What is it and why does it matter?</p>
      <p>
        Observability is the practice of measuring the internal state of systems
        by examining outputs, such as metrics and logs.
      </p>
      <p>
        Observability tools are critical to detect, debug, and resolve
        performance issues before they impact users.
      </p>
      <BorderBox style="my-3">
        <div>
          <p className="font-bold text-lg">Observability practices can:</p>
          <ul className="list-inside list-disc">
            <li className="py-4">Increase system resilience.</li>
            <li>Provide faster feedback.</li>
          </ul>
        </div>
      </BorderBox>

      <div>
        <p className="text-bold">The three pillars of observability are:</p>
        <div className="flex gap-5 mt-3 flex-col md:flex-row text-center">
          <ColorBox style="bg-indigo-600 text-white">Logs</ColorBox>
          <ColorBox>Traces</ColorBox>
          <ColorBox style="bg-pink-500 text-white">Metrics</ColorBox>
        </div>
      </div>
      <p>
        To address observability, we can use tools such as Datadog, a plataform
        that provides an observability service to monitor servers, databases,
        tools, and services, through a SaaS-based data analytics platform.
      </p>
      <Divider />
      <PreviousNextButtons
        next={{
          label: "Datadog",
          action: () =>
            openDocumentation({
              ...closeDocumentationSections,
              datadog: true,
            }),
        }}
      />
    </div>
  );
};
