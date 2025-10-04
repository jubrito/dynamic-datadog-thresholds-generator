import { render, screen } from "@testing-library/react";
import { ThresholdData, ThresholdsConfig } from "../../types/types";
import { GeneratorResults } from "./GeneratorResults";

describe("GeneratorResults", () => {
  const thresholdData: ThresholdData = {
    metricValues: [1, 2, 3],
    endpointPath: "path",
  };
  const thresholdsConfig: ThresholdsConfig = {
    warning: { percentile: 95, factor: 1 },
    critical: { percentile: 99, factor: 5 },
  };
  let originalScrollIntoView: typeof window.HTMLElement.prototype.scrollIntoView;

  beforeAll(() => {
    originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  beforeEach(() => {
    render(
      <GeneratorResults
        thresholdData={thresholdData}
        thresholdsConfig={thresholdsConfig}
      />
    );
  });

  afterAll(() => {
    window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
  });

  it("should render endpoint path", () => {
    expect(screen.getByText("path")).toBeInTheDocument();
  });
});
