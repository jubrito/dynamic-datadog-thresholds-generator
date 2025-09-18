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
  it("should render nothing if no endpointName or values", () => {
    render(<Thresholds percentileValues={[]} thresholdsConfig={mockConfig} />);
    const section = screen.getByRole("region", { hidden: true });
    const container = section.closest("div[aria-expanded]");
    expect(container).not.toHaveAttribute("aria-expanded");
    expect(section.querySelector(".opacity-0")).toBeInTheDocument();
  });

  it("should render endpoint name and thresholds when data is present", () => {
    render(
      <Thresholds
        endpointName="/api/test"
        percentileValues={[1, 2, 3]}
        thresholdsConfig={mockConfig}
      />
    );
    expect(screen.getByText("/api/test")).toBeInTheDocument();
    expect(screen.getByText(/Warning threshold:/)).toBeInTheDocument();
    expect(screen.getByText(/10/)).toBeInTheDocument();
    expect(screen.getByText(/Critical threshold:/)).toBeInTheDocument();
    expect(screen.getByText(/20/)).toBeInTheDocument();
  });

  it("should apply correct aria-expanded attribute", () => {
    render(
      <Thresholds
        endpointName="/api/test"
        percentileValues={[1, 2, 3]}
        thresholdsConfig={mockConfig}
      />
    );
    const container = screen
      .getByText("/api/test")
      .closest("div[aria-expanded]");
    expect(container).toHaveAttribute("aria-expanded", "true");
  });
});
