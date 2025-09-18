import { DocumentationContent } from "./DocumentationContent/DocumentationContent";
import { DocumentationNav } from "./DocumentationNav/DocumentationNav";

export const Documentation = () => {
  return (
    <section className="w-max max-w-350 grid xl:grid-cols-2 grid-cols-2 grid-rows-1 gap-7">
      <DocumentationNav />
      <DocumentationContent />
    </section>
  );
};
