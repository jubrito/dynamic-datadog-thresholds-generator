import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThresholdResults } from "./ThresholdResults";

describe("ThresholdResults", () => {
  it("should render both thresholds when provided", () => {
    render(<ThresholdResults warningThreshold={95} criticalThreshold={99} />);
    expect(screen.getByText("Warning threshold: 95")).toBeInTheDocument();
    expect(screen.getByText("Critical threshold: 99")).toBeInTheDocument();
  });

  it("should handle missing warning threshold", () => {
    render(<ThresholdResults criticalThreshold={99} />);
    expect(screen.queryByText("Warning threshold:")).not.toBeInTheDocument();
    expect(screen.getByText("Critical threshold: 99")).toBeInTheDocument();
  });

  it("handles missing critical threshold", () => {
    render(<ThresholdResults warningThreshold={95} />);
    expect(screen.getByText("Warning threshold: 95")).toBeInTheDocument();
    expect(screen.queryByText("Critical threshold:")).not.toBeInTheDocument();
  });

  it("should render thresholds with accessibility aria-live attribute", () => {
    render(<ThresholdResults warningThreshold={95} criticalThreshold={99} />);
    expect(screen.getByText("Warning threshold: 95")).toHaveAttribute(
      "aria-live",
      "polite"
    );
  });
});
