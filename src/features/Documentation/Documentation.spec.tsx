import { render, screen } from "@testing-library/react";
import { Documentation } from "./Documentation";

describe("Documentation", () => {
  beforeEach(() => {
    render(<Documentation />);
  });

  it("should render documentation nav section", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
