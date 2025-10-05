import { screen } from "@testing-library/dom";
import { Thresholds } from "./Thresholds";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Thresholds", () => {
  const openDocumentationMock = jest.fn();
  const page = "Thresholds";

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

  //   it("should render content", () => {
  //     const intro =
  //       /is a leading full-stack observability platform that automates application performance monitoring, log management, infrastructure monitoring, and more. One of its most powerful features are/i;
  //     const monitors =
  //       /monitors with automated alerts that help teams detect when systems degrade or fail./i;
  //     const question = /But how to define if a system is degrading or failing?/i;
  //     const thresholds =
  //       /When configuring monitors, you can define thresholds to create alerts and receive notifications about your endpoints./i;
  //     expect(screen.getByText(intro)).toBeInTheDocument();
  //     expect(screen.getByText(monitors)).toBeInTheDocument();
  //     expect(screen.getByText(question)).toBeInTheDocument();
  //     expect(screen.getByText(thresholds)).toBeInTheDocument();
  //   });

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
