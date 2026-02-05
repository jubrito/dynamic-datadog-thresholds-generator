import { screen } from "@testing-library/dom";
import { Observability } from "./Observability";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("Observability", () => {
  const page = "Observability";
  const subtitle = "What is it and why does it matter?";
  const content = [
    "Observability is the practice of measuring the internal state of systems by examining outputs, such as metrics and logs.",
    "Observability tools are critical to detect, debug, and resolve performance issues before they impact users.",
    "To address observability, we can use tools such as Datadog, a plataform that provides an observability service to monitor servers, databases, tools, and services, through a SaaS-based data analytics platform.",
    "Observability practices can:",
    "Increase system resilience.",
    "Provide faster feedback.",
    "The three pillars of observability are:",
    "Logs",
    "Metrics",
    "Traces",
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Observability />
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
    const subtitleEl = screen.getByRole("heading", {
      level: 2,
      name: subtitle,
    });
    expect(subtitleEl).toBeInTheDocument();
  });

  it.each(content)("should render all content", (contentText) => {
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should render "Next" button', () => {
    const nextButton = screen.getByRole("button", {
      name: /Next page: Datadog/i,
    });

    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveAttribute("href", "/documentation/datadog");
  });

  it('should not render "Previous" button', () => {
    const previousButton = screen.queryByRole("button", {
      name: /Previous page:/i,
    });

    expect(previousButton).not.toBeInTheDocument();
  });
});
