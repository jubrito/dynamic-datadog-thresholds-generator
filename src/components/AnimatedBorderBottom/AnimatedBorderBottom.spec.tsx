import { render, screen } from "@testing-library/react";
import { AnimatedBorderBottom } from "./AnimatedBorderBottom";
import { BrowserRouter } from "react-router";

describe("AnimatedBorderBottom", () => {
  it("should not display anything if link and children are not provided", () => {
    const { container } = render(<AnimatedBorderBottom />);
    expect(container).toBeEmptyDOMElement();
  });

  const ariaLabel = "aria label";
  const label = "label";
  const path = "/path";
  const style = "style";
  const child = "child";

  describe("WHEN link is provided but children is not", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AnimatedBorderBottom link={{ path, style }} aria-label={ariaLabel}>
            <span>{label}</span>
          </AnimatedBorderBottom>
        </BrowserRouter>
      );
    });
    it("should display link", () => {
      render(<AnimatedBorderBottom />);
      const link = screen.getByRole("link", { name: ariaLabel });
      expect(link).toBeInTheDocument();
    });
    it("should wrap label with link", () => {
      render(<AnimatedBorderBottom />);
      const link = screen.getByRole("link", { name: ariaLabel });
      expect(link).toHaveTextContent(label);
    });
    it("should display link with correct href", () => {
      render(<AnimatedBorderBottom />);
      const link = screen.getByRole("link", { name: ariaLabel });
      expect(link).toHaveAttribute("href", path);
    });
    it("should display link with classes that will enable animation", () => {
      render(<AnimatedBorderBottom />);
      const link = screen.getByRole("link", { name: ariaLabel });
      expect(link).toHaveAttribute("class", `relative group ${style}`);
    });
    it("should display animated span", () => {
      const span = screen.getByTestId("animated-border-bottom");
      expect(span).toBeInTheDocument();
      expect(span).toHaveClass(
        "absolute -bottom-1 left-0 w-0 transition-all h-0.5 group-hover:w-full bg-cyan-500 "
      );
      expect(span).toHaveAttribute("aria-hidden", "true");
    });
  });
  describe("WHEN children is provided but link is not", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AnimatedBorderBottom children={<p>{child}</p>} />
        </BrowserRouter>
      );
    });
    it("should display children", () => {
      const children = screen.getByText(child);
      expect(children).toBeInTheDocument();
      expect(children.parentElement).toHaveClass("relative group");
    });
    it("should not display link", () => {
      render(<AnimatedBorderBottom />);
      const link = screen.queryByRole("link", { name: ariaLabel });
      expect(link).not.toBeInTheDocument();
    });
    it("should display animated span", () => {
      const span = screen.getByTestId("animated-border-bottom");
      expect(span).toBeInTheDocument();
      expect(span).toHaveClass(
        "absolute -bottom-1 left-0 w-0 transition-all h-0.5 group-hover:w-full bg-cyan-500 "
      );
      expect(span).toHaveAttribute("aria-hidden", "true");
    });
  });
});
