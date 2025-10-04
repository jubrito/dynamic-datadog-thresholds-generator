import { render, screen, within } from "@testing-library/react";
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
    const endpointNameField = screen.getByLabelText(
      `Endpoint name: ${thresholdData.endpointPath}`
    );
    expect(endpointNameField).toBeInTheDocument();
    expect(within(endpointNameField).getByText(/path/)).toBeInTheDocument();
  });
  it("should render thresholds suggestions", () => {
    expect(screen.getByText(/Warning threshold: 3.9/)).toBeInTheDocument();
    expect(screen.getByText(/Critical threshold: 7.98/)).toBeInTheDocument();
  });
});
