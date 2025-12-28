import { screen, render } from "@testing-library/react";
import { DocumentationNav } from "./DocumentationNav";
import { BrowserRouter } from "react-router";
import {
  DATADOG_KEY,
  MONITOR_CONFIG_KEY,
  OBSERVABILITY_KEY,
  THRESHOLDS_KEY,
} from "../../../utils/constants";

const getNavLinkLabel = (pageName: string) => `${pageName} documentation page`;

describe("DocumentationNav", () => {
  const pages = [
    { name: "Observability", path: OBSERVABILITY_KEY },
    { name: "Datadog", path: DATADOG_KEY },
    { name: "Thresholds", path: THRESHOLDS_KEY },
    { name: "Monitor Configuration", path: MONITOR_CONFIG_KEY },
  ];
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DocumentationNav />
      </BrowserRouter>
    );
  });

  it("should render nav list with navigation role", () => {
    const nav = screen.getByLabelText("Documentation navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveRole("navigation");
  });

  it.each(pages)("should render each documentation item", (page) => {
    const pageButton = screen.getByRole("link", {
      name: getNavLinkLabel(page.name),
    });

    expect(pageButton).toBeInTheDocument();
    expect(pageButton).toHaveTextContent(page.name);
    expect(pageButton).toHaveAttribute("href", `/${page.path}`);
  });
});
