import { screen } from "@testing-library/dom";
import { Datadog } from "./Datadog";
import { render } from "@testing-library/react";

describe("Datadog", () => {
  const openDocumentationMock = jest.fn().mockRejectedValueOnce("");
  const page = "Datadog";
  beforeEach(() => {
    render(<Datadog openDocumentation={openDocumentationMock} />);
  });
  it("should render datadog logo hidden from sr", () => {
    const logo = screen.getByRole("presentation", { name: "" });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("alt", "");
  });
  it("should render title", () => {
    const title = screen.getAllByRole("heading", { level: 1, name: page });
    expect(title.length).toBeGreaterThan(0);
  });
});
