import { render, screen } from "@testing-library/react";
import { Documentation } from "./Documentation";
import { BrowserRouter } from "react-router";

describe("Documentation", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Documentation />
      </BrowserRouter>
    );
  });

  it("should render documentation nav section", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
