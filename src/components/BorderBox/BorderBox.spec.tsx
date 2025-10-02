import { render } from "@testing-library/react";
import { BorderBox } from "./BorderBox";

describe("BorderBox", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<BorderBox>Content</BorderBox>);
    expect(getByText("Content")).toBeInTheDocument();
  });
  it("should add default styles", () => {
    const { container } = render(<BorderBox>Content</BorderBox>);
    expect(container.firstChild).toHaveClass("border-1 border-white p-5 w-max");
  });
  it("should apply custom styles", () => {
    const { container } = render(
      <BorderBox style="custom-style">Content</BorderBox>
    );
    expect(container.firstChild).toHaveClass("custom-style");
  });
});
