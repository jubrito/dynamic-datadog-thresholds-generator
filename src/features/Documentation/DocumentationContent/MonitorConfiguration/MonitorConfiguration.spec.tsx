import { screen } from "@testing-library/dom";
import { MonitorConfiguration } from "./MonitorConfiguration";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("Monitor Configuration", () => {
  const page = "Monitor Configuration";
  const subtitle = "How to configure and analyze Datadog metric monitors?";

  const steps = [
    "Define a query to extract metrics",
    "Define a formula",
    "Define the evaluation details",
    "Define the thresholds",
  ];
  const listItemPrefixes = ["1.", "2.", "3.", "4."];
  const examples = [
    "Example: Retrieve the median of the request time in milliseconds for all endpoints X in production",
    "Example: Convert the request time in milliseconds to request time seconds",
    "Example: Evaluate the average of the query over the last 15 minutes",
    "Example: Trigger alert when the evaluated value (from query) is above the alert threshold 6",
  ];
  const content = [...steps, ...examples];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <MonitorConfiguration />
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

  it.each(listItemPrefixes)(
    "should render each list item prefix inside a paragraph in list",
    (prefix) => {
      const prefixElement = screen.getByText(prefix);
      const paragraph = prefixElement.parentElement;
      const listItem = paragraph?.parentElement;
      const list = listItem?.parentElement;
      expect(screen.getByText(prefix)).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
      expect(listItem).toBeInTheDocument();
      expect(list).toBeInTheDocument();
      expect(paragraph).toHaveRole("paragraph");
      expect(list).toHaveRole("list");
      expect(listItem).toHaveRole("listitem");
    }
  );

  it.each(content)("should render each content text", (contentText) => {
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should render "Previous" button', () => {
    const previousButton = screen.getByRole("button", {
      name: /Previous page: Metric Monitors/i,
    });

    expect(previousButton).toBeInTheDocument();
  });

  it('should render "Next" button', () => {
    const nextButton = screen.queryByRole("button", {
      name: /Next page: Monitoring Strategies/i,
    });

    expect(nextButton).toBeInTheDocument();
  });
});
