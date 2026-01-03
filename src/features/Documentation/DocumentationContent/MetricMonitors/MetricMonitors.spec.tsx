import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { MetricMonitors } from "./MetricMonitors";
import { BrowserRouter } from "react-router";

describe("Metric Monitors", () => {
  const title = "Monitors";
  const subtitle = "Metric Monitors";
  const content = [
    /Metric Monitors can be a great tool to/i,
    /By actively checking metrics and network endpoints, they can be used to create alerts when any metric cross a threshold over a given period of time/i,
    /This monitoring helps us to identify which systems require our prioritization so we know how and when to act/i,
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <MetricMonitors />
      </BrowserRouter>
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render datadog logo hidden from sr", () => {
    const logo = screen.getByRole("presentation", { name: "" });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("alt", "");
  });

  it("should render title", () => {
    expect(
      screen.getByRole("heading", { level: 1, name: title })
    ).toBeInTheDocument();
  });

  it("should render subtitle", () => {
    expect(
      screen.getByRole("heading", { level: 2, name: subtitle })
    ).toBeInTheDocument();
  });

  it.each(content)("should render content", (text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render "Previous" and "Next" buttons', () => {
    const previousButton = screen.getByRole("button", {
      name: /Previous page: Queries and Formulas/i,
    });
    const nextButton = screen.getByRole("button", {
      name: /Next page: Monitor Configuration/i,
    });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
