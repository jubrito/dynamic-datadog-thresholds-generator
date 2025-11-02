import { render, screen } from "@testing-library/react";
import { AnimatedBorderBottom } from "./AnimatedBorderBottom";
import { BrowserRouter } from "react-router";

describe("AnimatedBorderBottom", () => {
  // it("should not display anything if link and children are not provided", () => {
  //   // render(<AnimatedBorderBottom />)

  //   expect();
  // });
  const ariaLabel = "aria label";
  const label = "label";
  const path = "/path";
  const style = "style";
  const child = "child";

  describe("WHEN link is provided but children is not", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AnimatedBorderBottom
            link={{ label, path, style }}
            aria-label={ariaLabel}
          />
        </BrowserRouter>
      );
    });
    it("should display link", () => {
      render(<AnimatedBorderBottom />);
      const link = screen.getByRole("link", { name: ariaLabel });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", path);
      expect(link).toHaveTextContent(label);
      expect(link).toHaveAttribute("class", `relative group ${style}`);
    });
    it("should not display children", () => {
      const children = screen.queryByText(child);
      expect(children).not.toBeInTheDocument();
    });
  });
  describe("WHEN children is provided but link is not", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AnimatedBorderBottom children={<span>{child}</span>} />
        </BrowserRouter>
      );
    });
    it("should display children", () => {
      const children = screen.getByText(child);
      expect(children).toBeInTheDocument();
      expect(children.parentElement).toHaveClass("relative group");
    });
  });
});
