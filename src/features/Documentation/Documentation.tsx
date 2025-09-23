import { useState } from "react";
import { OpenDocumentationSection } from "../../types/types";
import { DocumentationContent } from "../../components/Documentation/DocumentationContent/DocumentationContent";
import { DocumentationNav } from "../../components/Documentation/DocumentationNav/DocumentationNav";
import { mainTopSpacing } from "../../utils/styles";

export const Documentation = () => {
  const [openDocumentationSection, setOpenDocumentationSection] =
    useState<OpenDocumentationSection>({
      observability: true,
      datadog: false,
      thresholds: false,
      monitorConfiguration: false,
    });
  return (
    <section
      className={`w-full flex justify-start align-start ${mainTopSpacing}`}
    >
      <DocumentationNav
        openDocumentation={setOpenDocumentationSection}
        documentationSectionOpen={openDocumentationSection}
      />
      <DocumentationContent
        openDocumentation={setOpenDocumentationSection}
        documentationSectionOpen={openDocumentationSection}
      />
    </section>
  );
};
