import { OpenDocumentationSection } from "../../../types/types";
import { Observability } from "./Observability/Observability";

type DocumentationContentProps = {
  documentationSectionOpen: OpenDocumentationSection;
};

export const DocumentationContent = ({
  documentationSectionOpen,
}: DocumentationContentProps) => {
  return (
    <div className="p-13 text-left">
      {documentationSectionOpen.observability && <Observability />}
    </div>
  );
};
