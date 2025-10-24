import { screen } from "@testing-library/dom";
import { Thresholds } from "./Thresholds";
import { render } from "@testing-library/react";
import { PreviousNextButtonsProps } from "../../../../components/PreviousNextButtons/PreviousNextButtons";

jest.mock(
  "../../../../components/PreviousNextButtons/PreviousNextButtons",
  () => ({
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
  })
);

describe("Thresholds", () => {
  const page = "Thresholds";
  const textContent = [
    "What is it and why does it matter?",
    "Noisy alerts.",
    "Missed anomalies.",
    "But how to set appropriate thresholds values when configuring alerts?",
  ];
  const labelContent = [
    "Thresholds are predefined values that trigger alerts when a metric crosses them. They act as boundaries for monitoring conditions, allowing you to define when a metric crosses them. They act as boundaries for monitoring conditions, allowing you to define alert or warning state.",
  ];

  beforeEach(() => {
    render(<Thresholds />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render title", () => {
    const title = screen.getByRole("heading", { level: 1, name: page });
    expect(title).toBeInTheDocument();
  });

  it.each(textContent)("should render all text content", (contentText) => {
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it.each(labelContent)("should render all labels", (contentLabel) => {
    expect(screen.getByLabelText(contentLabel)).toBeInTheDocument();
  });

  it('should render "Previous" and "Next" buttons', () => {
    const previousButton = screen.getByRole("button", {
      name: /Previous page: Datadog/i,
    });
    const nextButton = screen.getByRole("button", {
      name: /Next page: Monitor Configuration/i,
    });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
