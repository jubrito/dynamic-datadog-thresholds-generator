import { render, screen } from "@testing-library/react";
import { PreviousNextButtons } from "./PreviousNextButtons";
import { BrowserRouter } from "react-router";

describe("PreviousNextButtons", () => {
  const nextLabel = "Next";
  const previousLabel = "Previous";

  it("should render previous and next buttons with aria label", async () => {
    render(
      <BrowserRouter>
        <PreviousNextButtons
          next={{ path: "next", label: nextLabel }}
          previous={{ path: "previous", label: previousLabel }}
        />
      </BrowserRouter>
    );
    expect(
      screen.getByLabelText(`Next page: ${nextLabel}`)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(`Previous page: ${previousLabel}`)
    ).toBeInTheDocument();
  });

  it("should render only previous if next button is not provided", async () => {
    render(
      <BrowserRouter>
        <PreviousNextButtons
          previous={{ path: "previous", label: previousLabel }}
        />
      </BrowserRouter>
    );
    expect(
      screen.queryByLabelText(`Next page: ${nextLabel}`)
    ).not.toBeInTheDocument();
    expect(
      screen.getByLabelText(`Previous page: ${previousLabel}`)
    ).toBeInTheDocument();
  });
});
