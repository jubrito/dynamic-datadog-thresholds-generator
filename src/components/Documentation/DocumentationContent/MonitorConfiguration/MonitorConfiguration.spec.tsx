import { screen } from "@testing-library/dom";
import { MonitorConfiguration } from "./MonitorConfiguration";
import { render } from "@testing-library/react";
import { PreviousNextButtonsProps } from "../../../PreviousNextButtons/PreviousNextButtons";

jest.mock("../../../PreviousNextButtons/PreviousNextButtons", () => ({
  PreviousNextButtons: ({ previous, next }: PreviousNextButtonsProps) => (
    <div>
      {previous && (
        <button role="button" aria-label={`Previous page: ${previous.label}`}>
          Previous: {previous.label}
        </button>
      )}
      {next && (
        <button role="button" aria-label={`Next page: ${next.label}`}>
          Next: {next.label}
        </button>
      )}
    </div>
  ),
}));

describe("Monitor Configuration", () => {
  const page = "Monitor Configuration";
  const question = "How to configure and analyze Datadog monitors?";
  const steps = [
    "Define a query to extract metrics",
    "Define a formula",
    "Define the evaluation details",
    "Define the thresholds",
  ];
  const examples = [
    "Example: Retrieve the median of the request time in milliseconds for all endpoints X in production",
    "Example: Convert the request time in milliseconds to request time seconds",
    "Example: Evaluate the average of the query over the last 15 minutes",
    "Example: Trigger alert when the evaluated value (from query) is above the alert threshold 6",
  ];
  const content = [question, ...steps, ...examples];

  beforeEach(() => {
    render(<MonitorConfiguration />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render title", () => {
    const title = screen.getByRole("heading", { level: 1, name: page });
    expect(title).toBeInTheDocument();
  });

  it.each(content)("should render each content text", (contentText) => {
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should render "Previous" button', () => {
    const previousButton = screen.getByRole("button", {
      name: /Previous page: Thresholds/i,
    });

    expect(previousButton).toBeInTheDocument();
  });

  it('should not render "Next" button', () => {
    const nextButton = screen.queryByRole("button", {
      name: /Next page:/i,
    });

    expect(nextButton).not.toBeInTheDocument();
  });
});
