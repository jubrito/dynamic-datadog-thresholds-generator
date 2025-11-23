import { render, screen } from "@testing-library/react";
import { ActionLinks } from "./ActionLinks";
import { BrowserRouter } from "react-router";

describe("ActionLinks", () => {
  const internalPathToNavigate = "/path";
  const externalPathToNavigate = "www.external.com";
  const primaryLabel = "primary-label";
  const secondaryLabel = "secondary-label";

  describe("Primary Link", () => {
    it("should render internal primary link with path", () => {
      render(
        <BrowserRouter>
          <ActionLinks
            primaryLink={{
              pathToNavigate: internalPathToNavigate,
              label: primaryLabel,
            }}
          />
        </BrowserRouter>
      );
      const link = screen.getByRole("link", { name: primaryLabel });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", internalPathToNavigate);
    });

    it("should render external primary anchor correctly", () => {
      render(
        <BrowserRouter>
          <ActionLinks
            primaryLink={{
              pathToNavigate: internalPathToNavigate,
              label: primaryLabel,
              isExternalLink: true,
            }}
          />
        </BrowserRouter>
      );
      const link = screen.getByRole("anchor", { name: primaryLabel });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", internalPathToNavigate);
    });
  });

  describe("Primary Link", () => {
    it("should render internal secondary primary link with path", () => {
      render(
        <BrowserRouter>
          <ActionLinks
            primaryLink={{
              pathToNavigate: internalPathToNavigate,
              label: primaryLabel,
            }}
            secondaryLink={{
              pathToNavigate: internalPathToNavigate,
              label: secondaryLabel,
            }}
          />
        </BrowserRouter>
      );
      const link = screen.getByRole("link", { name: secondaryLabel });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", internalPathToNavigate);
    });
  });
});
