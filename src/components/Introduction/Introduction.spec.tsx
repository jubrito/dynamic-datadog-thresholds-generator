import { render, screen } from "@testing-library/react";
import { Introduction } from "./Introduction";

describe("BorderBox", () => {
  it("should render title", () => {
    render(<Introduction />);
    expect(screen.getByText("Dynamic Threshold Generator")).toBeInTheDocument();
  });
  it("should render description", () => {
    render(<Introduction />);
    expect(
      screen.getByText(
        /Extract a Datadog endpoint metrics csv file using any percentile aggregation and upload it to generate warning and critical thresholds suggestions./
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Decide how rigorous you want to be by adjusting the configuration values at any time./
      )
    ).toBeInTheDocument();
  });
});
