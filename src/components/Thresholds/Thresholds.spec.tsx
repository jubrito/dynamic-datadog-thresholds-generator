import { render, screen } from "@testing-library/react";
import { Thresholds } from "./Thresholds";

const mockConfig = {
  warning: {
    percentile: 95,
    factor: 50,
  },
  critical: {
    percentile: 99,
    factor: 90,
  },
};

jest.mock("../../utils/thresholds", () => ({
  computeAdaptiveThresholds: jest.fn(() => ({
    warningThreshold: 10,
    criticalThreshold: 20,
  })),
}));

describe("Thresholds", () => {
  it("should not render results when there are no endpointName or percentile value", () => {
    render(
      <Thresholds
        sortedPercentileValues={[]}
        endpointName={"endpoint-name"}
        thresholdsConfig={mockConfig}
      />
    );
    const section = screen.getByRole("region", { hidden: true });
    expect(section).toHaveClass(/opacity-0/);
    expect(screen.queryByText(/endpoint-name/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Warning threshold:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Critical threshold:/)).not.toBeInTheDocument();
  });

  it("should render endpoint name and thresholds when data is present", () => {
    render(
      <Thresholds
        sortedPercentileValues={[1, 2, 3]}
        endpointName={"/api/test"}
        thresholdsConfig={mockConfig}
      />
    );
    const section = screen.getByRole("region", { hidden: true });
    expect(section).toHaveClass(/opacity-100/);
    expect(screen.getByText("/api/test")).toBeInTheDocument();
    expect(screen.getByText(/Warning threshold:/)).toBeInTheDocument();
    expect(screen.getByText(/10/)).toBeInTheDocument();
    expect(screen.getByText(/Critical threshold:/)).toBeInTheDocument();
    expect(screen.getByText(/20/)).toBeInTheDocument();
  });
});
