import { screen, render } from "@testing-library/react";
import { DocumentationNav } from "./DocumentationNav";

describe("DocumentationNav", () => {
  const openDocumentationMock = jest.fn();
  const documentationSectionOpen = {
    observability: false,
    datadog: false,
    thresholds: false,
    monitorConfiguration: false,
  };
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
});
