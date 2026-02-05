import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { MonitoringStrategies } from "./MonitoringStrategies";

describe("Monitoring Strategies", () => {
  const page = "Monitoring Strategies";
  const caption =
    "Advantages and disavantages of using a single monitor or specific monitors for multiple endpoints";
  const blanketMonitorsContent = [
    /Blanket Monitors/,
    /Singular latency threshold/,
    /Based on median \(p50\)/,
    /Measures the typical user experience/,
    /Simple setup, but less scalable/,
    /Alerts might not reflect endpoints' reality: what's considered "normal" for one endpoint could be "abnormal" for another/,
  ];
  const targetedMonitorsContent = [
    /Targeted Monitors/,
    /Specific tailored thresholds per endpoint/,
    /Can be based on specific percentiles \(ex: p95\)/,
    /Measures how slow users are affected/,
    /Laborious setup, but more scalable/,
    /Meaningful alerts considering endpoints characteristics: each threshold defined considers what is "normal" for that endpoint/,
  ];
  const content = [...blanketMonitorsContent, ...targetedMonitorsContent];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <MonitoringStrategies />
      </BrowserRouter>
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render title", () => {
    const title = screen.getByRole("heading", { level: 1, name: page });
    expect(title).toBeInTheDocument();
  });

  it("should render caption", () => {
    const captionEl = screen.getByRole("caption", { name: caption });
    expect(captionEl).toBeInTheDocument();
  });

  it.each(content)("should render each content text", (contentText) => {
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should render "Previous" button', () => {
    const previousButton = screen.getByRole("button", {
      name: /Previous page: Monitor Configuration/i,
    });

    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toHaveAttribute(
      "href",
      "/documentation/monitor-configuration"
    );
  });

  it('should not render "Next" button', () => {
    const nextButton = screen.queryByRole("button", {
      name: /Next page:/i,
    });

    expect(nextButton).not.toBeInTheDocument();
  });
});
