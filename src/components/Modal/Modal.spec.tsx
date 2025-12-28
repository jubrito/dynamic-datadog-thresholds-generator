import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { VARIANTS } from "../../utils/constants";
import { BrowserRouter } from "react-router";

describe("Modal", () => {
  describe("default rendering", () => {
    const title = "title";
    const content = "content";
    const primaryLink = { label: "primary", pathToNavigate: "/primary-path" };
    const secondaryLink = {
      label: "secondary",
      pathToNavigate: "/secondary-path",
    };
    const onCloseMock = jest.fn();

    beforeEach(() => {
      render(
        <BrowserRouter>
          <Modal
            isOpen={true}
            onClose={onCloseMock}
            title={title}
            primaryLink={primaryLink}
            secondaryLink={secondaryLink}
            variant={VARIANTS.WARNING}
          >
            {content}
          </Modal>
        </BrowserRouter>
      );
    });

    it("should render title", () => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
    it("should render children", () => {
      expect(screen.getByText(content)).toBeInTheDocument();
    });
    it("should render primary link", () => {
      expect(screen.getByText(primaryLink.label)).toBeInTheDocument();
    });
    it("should render secondary link", () => {
      expect(screen.getByText(secondaryLink.label)).toBeInTheDocument();
    });
  });
});
