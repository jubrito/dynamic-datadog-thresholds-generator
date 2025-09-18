import { useState } from "react";
import { OpenDocumentationSection } from "../../types/types";
import { mainGridStyle } from "../../utils/styles";
import { DocumentationContent } from "../../components/Documentation/DocumentationContent/DocumentationContent";
import { DocumentationNav } from "../../components/Documentation/DocumentationNav/DocumentationNav";

export const Documentation = () => {
  const [openDocumentationSection, setOpenDocumentationSection] =
    useState<OpenDocumentationSection>({
      observability: true,
      datadog: false,
      thresholds: false,
    });
  return (
    <section className={`${mainGridStyle} w-full`}>
      <DocumentationNav
        openDocumentation={setOpenDocumentationSection}
        documentationSectionOpen={openDocumentationSection}
      />
      <div className="col-start-2 col-end-4">
        <DocumentationContent
          openDocumentation={setOpenDocumentationSection}
          documentationSectionOpen={openDocumentationSection}
        />
      </div>
    </section>
  );
};
