import { render, screen } from "@testing-library/react";
import { Introduction } from "./Introduction";

describe("BorderBox", () => {
  it("should render title", () => {
    render(<Introduction />);
    expect(screen.getByText("Dynamic Threshold Generator")).toBeInTheDocument();
  });
});
