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
        /Configure the generator to define how rigorous you want the threshold suggestions to be./
      )
    ).toBeInTheDocument();
  });
});
