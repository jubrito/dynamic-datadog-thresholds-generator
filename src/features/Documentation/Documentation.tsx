import { DocumentationContent } from "./DocumentationContent/DocumentationContent";
import { DocumentationNav } from "./DocumentationNav/DocumentationNav";

export const Documentation = () => {
  return (
    <section className="w-full">
      <DocumentationNav />
      <DocumentationContent />
    </section>
  );
};
