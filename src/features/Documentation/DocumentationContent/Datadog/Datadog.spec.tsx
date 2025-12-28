import { screen } from "@testing-library/dom";
import { Datadog } from "./Datadog";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("Datadog", () => {
  const page = "Datadog";

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Datadog />
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
    const title = screen.getAllByRole("heading", { level: 1, name: page });
    expect(title.length).toBeGreaterThan(0);
  });

  it("should render content", () => {
    const intro =
      /is a leading full-stack observability platform that automates application performance monitoring, log management, infrastructure monitoring, and more. One of its most powerful features are/i;
    const monitors =
      /monitors with automated alerts that help teams detect when systems degrade or fail./i;
    const question = /But how to define if a system is degrading or failing?/i;
    const thresholds =
      /When configuring monitors, you can define thresholds to create alerts and receive notifications about your endpoints./i;
    expect(screen.getByText(intro)).toBeInTheDocument();
    expect(screen.getByText(monitors)).toBeInTheDocument();
    expect(screen.getByText(question)).toBeInTheDocument();
    expect(screen.getByText(thresholds)).toBeInTheDocument();
  });

  it('should render "Previous" and "Next" buttons', () => {
    const previousButton = screen.getByRole("button", {
      name: /Previous page: Observability/i,
    });
    const nextButton = screen.getByRole("button", {
      name: /Next page: Thresholds/i,
    });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
