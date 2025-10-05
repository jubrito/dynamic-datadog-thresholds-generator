import { screen } from "@testing-library/dom";
import { Observability } from "./Observability";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Observability", () => {
  const openDocumentationMock = jest.fn();
  const page = "Observability";
  const texts = [
    "What is it and why does it matter?",
    "Observability is the practice of measuring the internal state of systems by examining outputs, such as metrics and logs.",
    "Observability tools are critical to detect, debug, and resolve performance issues before they impact users.",
    "To address observability, we can use tools such as Datadog, a plataform that provides an observability service to monitor servers, databases, tools, and services, through a SaaS-based data analytics platform.",
  ];
  const observabilityPractices = [
    "Observability practices can:",
    "Increase system resilience",
    "Provide faster feedback",
  ];
  const pillars = [
    "The three pillars of observability are:",
    "logs",
    "metrics",
    "traces",
  ];
  const content = [...texts, ...observabilityPractices, ...pillars];

  beforeEach(() => {
    render(<Observability openDocumentation={openDocumentationMock} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render title", () => {
    const title = screen.getByRole("heading", { level: 1, name: page });
    expect(title).toBeInTheDocument();
  });

  //   it.each(content)("should render each content text", (contentText) => {
  //     expect(screen.getByText(contentText)).toBeInTheDocument();
  //   });

  //   it('should render "Previous" button', () => {
  //     const previousButton = screen.getByRole("button", {
  //       name: /Previous page:/i,
  //     });

  //     expect(previousButton).toBeInTheDocument();
  //   });

  //   it('should not render "Next" button', () => {
  //     const nextButton = screen.queryByRole("button", {
  //       name: /Next page:/i,
  //     });

  //     expect(nextButton).not.toBeInTheDocument();
  //   });

  //   it('should call function update page by clicking on "Previous" button', async () => {
  //     const previousButton = screen.getByRole("button", {
  //       name: /Previous page: Thresholds/,
  //     });

  //     await userEvent.click(previousButton);

  //     const previousAction = {
  //       datadog: false,
  //       Observability: false,
  //       observability: false,
  //       thresholds: true, // open page
  //     };

  //     expect(openDocumentationMock).toHaveBeenCalledWith(previousAction);
  //   });
});
