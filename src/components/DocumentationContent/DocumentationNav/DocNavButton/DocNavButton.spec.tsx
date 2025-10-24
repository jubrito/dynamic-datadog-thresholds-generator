import { render, screen } from "@testing-library/react";
import { DocNavButton } from "./DocNavButton";
import { MemoryRouter } from "react-router";

describe("DocNavButton", () => {
  const label = "label";
  it("should render documentation navigation button with correct path", () => {
    render(
      <MemoryRouter>
        <DocNavButton label={label} isOpen={true} path="path" />;
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "label documentation page" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/path");
  });
});
