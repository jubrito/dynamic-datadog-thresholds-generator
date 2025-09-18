import { OpenDocumentationSection } from "../../../types/types";
import { Datadog } from "./Datadog/Datadog";
import { Observability } from "./Observability/Observability";

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
    <div className="p-13 text-left">
      {documentationSectionOpen.observability && (
        <Observability openDocumentation={openDocumentation} />
      )}
      {documentationSectionOpen.datadog && <Datadog />}
    </div>
  );
};
