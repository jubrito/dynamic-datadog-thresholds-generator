import { render, screen } from "@testing-library/react";
import { StatisticsItem } from "./StatisticsItem";

describe("StatisticsItem", () => {
  it("should render label and value correctly", () => {
    render(<StatisticsItem label="label:" value={101} />);
    expect(screen.getByText("label:")).toBeInTheDocument();
    expect(screen.getByText("101")).toBeInTheDocument();
  });
  it("should render only label when value is not provided", () => {
    render(<StatisticsItem label="Only label:" />);
    expect(screen.getByText("Only label:")).toBeInTheDocument();
  });
});
