import { screen } from "@testing-library/dom";
import { Thresholds } from "./Thresholds";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Thresholds", () => {
  const openDocumentationMock = jest.fn();
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
    render(<Thresholds openDocumentation={openDocumentationMock} />);
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

  //   it('should render "Previous" and "Next" buttons', () => {
  //     const previousButton = screen.getByRole("button", {
  //       name: /Previous page:/i,
  //     });
  //     const nextButton = screen.getByRole("button", { name: /Next page:/i });

  //     expect(previousButton).toBeInTheDocument();
  //     expect(nextButton).toBeInTheDocument();
  //   });

  //   it('should call function update page by clicking on "Previous" button', async () => {
  //     const previousButton = screen.getByRole("button", {
  //       name: /Previous page: Observability/,
  //     });

  //     await userEvent.click(previousButton);

  //     const previousAction = {
  //       datadog: false,
  //       monitorConfiguration: false,
  //       observability: true, // open page
  //       thresholds: false,
  //     };

  //     expect(openDocumentationMock).toHaveBeenCalledWith(previousAction);
  //   });
  //   it('should call function update page by clicking on "Next" buton', async () => {
  //     const nextButton = screen.getByRole("button", {
  //       name: /Next page: Thresholds/i,
  //     });

  //     await userEvent.click(nextButton);

  //     const nextAction = {
  //       datadog: false,
  //       monitorConfiguration: false,
  //       observability: false,
  //       thresholds: true, // open page
  //     };

  //     expect(openDocumentationMock).toHaveBeenCalledWith(nextAction);
  //   });
});
