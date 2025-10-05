import { render, screen } from "@testing-library/react";
import { DocumentationContent } from "./DocumentationContent";

describe("DocumentationContent", () => {
  it("should render each section if documentation section settings are set to open", () => {
    render(
      <DocumentationContent
        documentationSectionOpen={{
          datadog: true,
          monitorConfiguration: true,
          observability: true,
          thresholds: true,
        }}
        openDocumentation={jest.fn()}
      />
    );
    expect(
      screen.getByRole("heading", { name: "Observability", level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { name: "Datadog", level: 1 }).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", { name: "Thresholds", level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Monitor Configuration", level: 1 })
    ).toBeInTheDocument();
  });
});
