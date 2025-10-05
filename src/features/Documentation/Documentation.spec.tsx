import { render, screen, within } from "@testing-library/react";
import { Documentation } from "./Documentation";

describe("Documentation", () => {
  beforeEach(() => {
    render(<Documentation />);
  });

  it("should render documentation nav section", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should render observability section by default", () => {
    const section = screen.getByRole("region");
    expect(
      within(section).getByRole("heading", { level: 1, name: "Observability" })
    ).toBeInTheDocument();
  });
});
