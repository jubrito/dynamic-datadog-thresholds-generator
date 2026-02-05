import { screen } from "@testing-library/dom";
import { Thresholds } from "./Thresholds";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("Thresholds", () => {
  const page = "Thresholds";
  const subtitle = "Thresholds and Alerts";
  const textContent = ["Noisy alerts.", "Missed anomalies."];
  const labelContent = [
    "Thresholds are predefined values that trigger alerts when a metric crosses them. They act as boundaries for monitoring conditions, allowing you to define when a metric crosses them. They act as boundaries for monitoring conditions, allowing you to define alert or warning state.",
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Thresholds />
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

  it("should render subtitle", () => {
    const title = screen.getByRole("heading", { level: 2, name: subtitle });
    expect(title).toBeInTheDocument();
  });

  it.each(textContent)("should render all text content", (contentText) => {
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it.each(labelContent)("should render all labels", (contentLabel) => {
    expect(screen.getByLabelText(contentLabel)).toBeInTheDocument();
  });

  it('should render "Previous" "Next" button', () => {
    const previousButton = screen.getByRole("button", {
      name: /Previous page: Datadog/i,
    });

    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toHaveAttribute("href", "/documentation/datadog");
  });

  it('should render "Next" button', () => {
    const nextButton = screen.getByRole("button", {
      name: /Next page: Queries and Formulas/i,
    });

    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveAttribute(
      "href",
      "/documentation/queries-formulas"
    );
  });
});
