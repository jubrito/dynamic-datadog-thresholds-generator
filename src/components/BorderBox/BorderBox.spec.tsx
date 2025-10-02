import { render } from "@testing-library/react";
import { BorderBox } from "./BorderBox";

describe("BorderBox", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<BorderBox>Content</BorderBox>);
    expect(getByText("Content")).toBeInTheDocument();
  });
});
