import { render } from "@testing-library/react";
import { ColorBox } from "./ColorBox";

describe("ColorBox", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<ColorBox>Content</ColorBox>);
    expect(getByText("Content")).toBeInTheDocument();
  });
});
