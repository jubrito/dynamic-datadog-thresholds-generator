import { OpenDocumentationSection } from "../../../../types/types";
import { closeDocumentationSections } from "../../../../utils/constants";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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
        In distributed systems, observability tools are critical to detect,
        debug, and resolve performance issues before they impact users.
      </p>
      <div className="py-4">
        <hr />
      </div>
      <div>
        <p className="font-bold text-lg">Observability practices can:</p>
        <ul className="list-inside list-disc">
          <li className="py-4">Increase system resilience.</li>
          <li>Provide faster feedback.</li>
        </ul>
      </div>
      <div className="py-4">
        <hr />
      </div>
      <div>
        <p className="text-bold">The three pillars of observability are:</p>
        <div className="flex gap-5 mt-3">
          <span className="bg-indigo-600 p-3 px-15">Logs</span>
          <span className="bg-cyan-500 p-3 px-15">Traces</span>
          <span className="bg-pink-600 p-3 px-15">Metrics</span>
        </div>
      </div>
      <div className="py-4">
        <hr />
      </div>
      <p>
        To address observability, we can use tools such as Datadog, a plataform
        that provides an observability service to monitor servers, databases,
        tools, and services, through a SaaS-based data analytics platform.
      </p>
      <button
        onClick={() =>
          openDocumentation({
            ...closeDocumentationSections,
            datadog: true,
          })
        }
        className={
          "relative group text-lg hover:text-white cursor-pointer w-fit"
        }
      >
        <span>
          <span className="font-bold">Next: Datadog</span>
          {<NavigateNextIcon />}
        </span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
      </button>
    </div>
  );
};
