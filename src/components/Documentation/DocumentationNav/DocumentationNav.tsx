import { OpenDocumentationSection } from "../../../types/types";
import { closeDocumentationSections } from "../../../utils/constants";
import { DocNavButton } from "./DocNavButton/DocNavButton";

type DocumentationNavProps = {
  openDocumentation: React.Dispatch<
    React.SetStateAction<OpenDocumentationSection>
  >;
  documentationSectionOpen: OpenDocumentationSection;
};

export const DocumentationNav = ({
  openDocumentation,
  documentationSectionOpen,
}: DocumentationNavProps) => {
  return (
    <div className="bg-black h-dvh h-auto p-9 min-w-fit">
      <ul className="flex flex-col gap-8 mt-3 text-left cursor-pointer">
        <li>
          <DocNavButton
            label="Observability"
            isOpen={documentationSectionOpen.observability}
            onClick={() =>
              openDocumentation({
                ...closeDocumentationSections,
                observability: true,
              })
            }
          />
        </li>
        <li>
          <DocNavButton
            label="Datadog"
            isOpen={documentationSectionOpen.datadog}
            onClick={() =>
              openDocumentation({
                ...closeDocumentationSections,
                datadog: true,
              })
            }
          />
        </li>
        <li>
          <DocNavButton
            label="Thresholds"
            isOpen={documentationSectionOpen.thresholds}
            onClick={() =>
              openDocumentation({
                ...closeDocumentationSections,
                thresholds: true,
              })
            }
          />
        </li>
        <li>
          <DocNavButton
            label="Monitor Config"
            isOpen={documentationSectionOpen.monitorConfiguration}
            onClick={() =>
              openDocumentation({
                ...closeDocumentationSections,
                monitorConfiguration: true,
              })
            }
          />
        </li>
      </ul>
    </div>
  );
};
