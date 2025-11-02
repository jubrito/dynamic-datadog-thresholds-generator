import { render, screen } from "@testing-library/react";
import { AnimatedBorderBottom } from "./AnimatedBorderBottom";
import { BrowserRouter } from "react-router";

describe("AnimatedBorderBottom", () => {
  describe("WHEN link is provided but children is not", () => {
    const ariaLabel = "aria label";
    const label = "label";
    const path = "/path";
    const style = "style";
    it("should display link", () => {
      render(
        <BrowserRouter>
          <AnimatedBorderBottom
            link={{ label, path, style }}
            aria-label={ariaLabel}
          />
        </BrowserRouter>
      );
      const link = screen.getByRole("link", { name: ariaLabel });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", path);
      expect(link).toHaveTextContent(label);
      expect(link).toHaveAttribute("class", `relative group ${style}`);
    });
  });
});
