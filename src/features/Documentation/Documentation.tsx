import { mainGridStyle } from "../../utils/styles";
import { DocumentationContent } from "./DocumentationContent/DocumentationContent";
import { DocumentationNav } from "./DocumentationNav/DocumentationNav";

export const Documentation = () => {
  return (
    <section className={`${mainGridStyle} w-full`}>
      <DocumentationNav />
      <div className="col-start-2 col-end-4">
        <DocumentationContent />
      </div>
    </section>
  );
};
