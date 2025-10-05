import { screen } from "@testing-library/dom";
import { Datadog } from "./Datadog";
import { render } from "@testing-library/react";

describe("Datadog", () => {
  const openDocumentationMock = jest.fn().mockRejectedValueOnce("");
  beforeEach(() => {
    render(<Datadog openDocumentation={openDocumentationMock} />);
  });
  it("should render datadog logo hidden from sr", () => {
    const logo = screen.getByRole("presentation", { name: "" });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("alt", "");
  });
});
