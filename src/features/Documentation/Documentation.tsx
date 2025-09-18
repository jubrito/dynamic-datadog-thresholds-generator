import { useState } from "react";
import { OpenDocumentationSection } from "../../types/types";
import { mainGridStyle } from "../../utils/styles";
import { DocumentationContent } from "./DocumentationContent/DocumentationContent";
import { DocumentationNav } from "./DocumentationNav/DocumentationNav";

export const Documentation = () => {
  const [openDocumentationSection, setOpenDocumentationSection] =
    useState<OpenDocumentationSection>({
      observability: true,
    });
  return (
    <section className={`${mainGridStyle} w-full`}>
      <DocumentationNav
        openDocumentation={setOpenDocumentationSection}
        documentationSectionOpen={openDocumentationSection}
      />
      <div className="col-start-2 col-end-4">
        <DocumentationContent
          documentationSectionOpen={openDocumentationSection}
        />
      </div>
    </section>
  );
};
