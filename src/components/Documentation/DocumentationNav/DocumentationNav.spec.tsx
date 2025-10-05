import { screen, render } from "@testing-library/react";
import { DocumentationNav } from "./DocumentationNav";

const getNavLinkLabel = (pageName: string) => `${pageName} documentation page`;

describe("DocumentationNav", () => {
  const openDocumentationMock = jest.fn();
  const documentationSectionOpen = {
    observability: false,
    datadog: false,
    thresholds: false,
    monitorConfiguration: false,
  };
  const pages = ["Observability", "Datadog", "Thresholds", "Monitor Config"];

  beforeEach(() => {
    render(
      <DocumentationNav
        openDocumentation={openDocumentationMock}
        documentationSectionOpen={documentationSectionOpen}
      />
    );
  });

  it("should render nav list with navigation role", () => {
    const nav = screen.getByLabelText("Documentation navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveRole("navigation");
  });

  it.each(pages)("should render each documentation item", (page) => {
    const pageButton = screen.getByRole("button", {
      name: getNavLinkLabel(page),
    });

    expect(pageButton).toBeInTheDocument();
    expect(pageButton).toHaveTextContent(page);
  });
});
