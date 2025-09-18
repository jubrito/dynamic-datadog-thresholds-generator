import { OpenDocumentationSection } from "../../../types/types";
import { closeDocumentationSections } from "../../../utils/constants";

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
    <div className="bg-black h-dvh w-40">
      <ul className="flex flex-col gap-8 mt-15 text-left pl-7 cursor-pointer">
        <li>
          <button
            onClick={() =>
              openDocumentation({
                ...closeDocumentationSections,
                observability: true,
              })
            }
            className={`${
              documentationSectionOpen.observability
                ? "text-indigo-300 font-bold"
                : "text-[#dedae3] "
            } relative group text-lg hover:text-white cursor-pointer`}
          >
            <span>Observability</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              openDocumentation({
                ...closeDocumentationSections,
                datadog: true,
              })
            }
            className={`${
              documentationSectionOpen.datadog
                ? "text-indigo-300 font-bold"
                : "text-[#dedae3] "
            } relative group text-lg hover:text-white cursor-pointer`}
          >
            <span>Datadog</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              openDocumentation({
                ...closeDocumentationSections,
                thresholds: true,
              })
            }
            className={`${
              documentationSectionOpen.thresholds
                ? "text-indigo-300 font-bold"
                : "text-[#dedae3] "
            } relative group text-lg hover:text-white cursor-pointer`}
          >
            <span>Thresholds</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
          </button>
        </li>
      </ul>
    </div>
  );
};
