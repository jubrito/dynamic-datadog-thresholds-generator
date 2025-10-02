import { render } from "@testing-library/react";
import { BorderBox } from "./BorderBox";

describe("BorderBox", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<BorderBox>Content</BorderBox>);
    expect(getByText("Content")).toBeInTheDocument();
  });
  it("should apply custom styles", () => {
    const { container } = render(
      <BorderBox style="custom-style">Content</BorderBox>
    );
    expect(container.firstChild).toHaveClass("custom-style");
  });
});
