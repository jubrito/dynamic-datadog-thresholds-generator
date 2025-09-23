import { OpenDocumentationSection } from "../../../types/types";
import { Datadog } from "./Datadog/Datadog";
import { MonitorConfiguration } from "./MonitorConfiguration/MonitorConfiguration";
import { Observability } from "./Observability/Observability";
import { Thresholds } from "./Thresholds/Thresholds";

type DocumentationContentProps = {
  documentationSectionOpen: OpenDocumentationSection;
  openDocumentation: React.Dispatch<
    React.SetStateAction<OpenDocumentationSection>
  >;
};

export const DocumentationContent = ({
  documentationSectionOpen,
  openDocumentation,
}: DocumentationContentProps) => {
  return (
    <div className="p-10 text-left max-w-250">
      {documentationSectionOpen.observability && (
        <Observability openDocumentation={openDocumentation} />
      )}
      {documentationSectionOpen.datadog && (
        <Datadog openDocumentation={openDocumentation} />
      )}
      {documentationSectionOpen.thresholds && (
        <Thresholds openDocumentation={openDocumentation} />
      )}
      {documentationSectionOpen.monitorConfiguration && (
        <MonitorConfiguration openDocumentation={openDocumentation} />
      )}
    </div>
  );
};
