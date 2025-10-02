import { render } from "@testing-library/react";
import { ColorBox } from "./ColorBox";

describe("ColorBox", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<ColorBox>Content</ColorBox>);
    expect(getByText("Content")).toBeInTheDocument();
  });
  it("should add default styles", () => {
    const { container } = render(<ColorBox>Content</ColorBox>);
    expect(container.firstChild).toHaveClass(
      "p-3 px-15 text-black font-bold bg-cyan-500"
    );
  });
  it("should apply custom styles", () => {
    const { container } = render(
      <ColorBox style="custom-style">Content</ColorBox>
    );
    expect(container.firstChild).toHaveClass("custom-style");
  });
});
