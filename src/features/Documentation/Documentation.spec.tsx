import { render, screen, within } from "@testing-library/react";
import { Documentation } from "./Documentation";

describe("Documentation", () => {
  beforeEach(() => {
    render(<Documentation />);
  });

  it("should render documentation section", () => {
    const documentationSection = screen.getByRole("region");
    expect(documentationSection).toBeInTheDocument();
    const documentationNavItems =
      within(documentationSection).getAllByLabelText(/documentation page/i);
    expect(documentationNavItems.length).toBeGreaterThan(0);
  });
});
