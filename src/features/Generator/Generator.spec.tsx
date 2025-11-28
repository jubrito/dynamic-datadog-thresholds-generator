import { render, screen } from "@testing-library/react";
import { Generator } from "./Generator";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";

jest.mock("filepond/dist/filepond.min.css", () => ({}), { virtual: true });
jest.mock(
  "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css",
  () => ({}),
  { virtual: true }
);

describe("Generator", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Generator />
      </BrowserRouter>
    );
  });

  it("should render introduction section", () => {
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Dynamic Threshold Generator",
      })
    ).toBeInTheDocument();
  });
  it.only("should render CSV file upload section", () => {
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "CSV file upload",
      })
    ).toBeInTheDocument();
  });
  it("should render configuration section", () => {
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Generator configuration",
      })
    ).toBeInTheDocument();
  });
  it("should not render tooltip section initially", () => {
    expect(
      screen.queryByRole("heading", {
        level: 2,
        name: "How to use the generator",
      })
    ).not.toBeInTheDocument();
  });

  it("should hide CSV file upload and configuration sections when clicking on the tooltip", async () => {
    const tooltipButton = screen.getByRole("button", {
      name: "Toggle generator explanation",
    });
    await userEvent.click(tooltipButton);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "How to use the generator",
      })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        level: 2,
        name: "CSV file upload",
      })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        level: 2,
        name: "Generator configuration",
      })
    ).not.toBeInTheDocument();
  });
  it("should render modal when file uploaded is invalid", async () => {
    render(
      <BrowserRouter>
        <Generator />
      </BrowserRouter>
    );

    const csvTemplate = `query;group;time;value
      avg:app.request_time_ms.95percentile{api_env:prod uri:/endpoint/example/--id--} / 1000;;2025-08-01T00:00:00.000Z;0.025131
      avg:app.request_time_ms.95percentile{api_env:prod uri:/endpoint/example/--id--} / 1000;;2025-08-02T12:00:00.000Z;0.039885
      `;
    const file = new File([csvTemplate], "valid.csv", { type: "text/csv" });
    const fileDropInput = screen.getByRole("input", { name: "files" });
    await userEvent.upload(fileDropInput, file);

    const modalTitle = screen.queryByRole("heading", {
      level: 3,
      name: "The file uploaded is not valid",
    });
    const primaryLink = screen.queryByRole("link", {
      name: "Learn how to upload valid files",
    });
    const secondaryLink = screen.queryByRole("link", {
      name: "Go to DataDog docs",
    });
    expect(modalTitle).not.toBeInTheDocument();
    expect(primaryLink).not.toBeInTheDocument();
    expect(secondaryLink).not.toBeInTheDocument();
  });

  it.todo("should not render modal when file uploaded is valid");
});
