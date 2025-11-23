import { Link } from "react-router";
import { Variants } from "../../../types/types";
import { VARIANT_STYLES } from "../../../utils/styles";
import { VARIANTS } from "../../../utils/constants";

export type ActionLinks = {
  primaryLink: LinkProps;
  secondaryLink?: LinkProps;
  variant?: Variants;
};

export type LinkProps = {
  pathToNavigate?: string;
  label?: string;
  isExternalLink?: boolean;
};

type InternalLinkProps = {
  styles: (typeof VARIANT_STYLES)[Variants];
  label: LinkProps["label"];
  pathToNavigate: LinkProps["pathToNavigate"];
  linkType: (typeof LINK_TYPES)[keyof typeof LINK_TYPES];
};

const LINK_TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

const ExternalLink = ({
  pathToNavigate,
  label,
  styles,
  linkType,
}: InternalLinkProps) => {
  const primaryLinkStyle = `${styles.bg} ${styles.bgText} ${styles.bgHover} sm:ml-4 mb-2 sm:mb-0 `;
  const secondaryLinkStyle = "bg-white/10 text-white hover:bg-white/20";
  const linkStyle =
    linkType == LINK_TYPES.PRIMARY ? primaryLinkStyle : secondaryLinkStyle;

  if (!label) return null;

  return (
    <a
      href={pathToNavigate}
      target="_blank"
      rel="noopener noreferrer"
      className={`${linkStyle} cursor-pointer inline-flex w-full justify-center rounded-md leading-none px-3 py-2 text-sm font-bold sm:w-auto`}
    >
      {label}
    </a>
  );
};

const InternalLink = ({
  pathToNavigate,
  label,
  styles,
  linkType,
}: InternalLinkProps) => {
  const primaryLinkStyle = `${styles.bg} ${styles.bgText} ${styles.bgHover} sm:ml-4 mb-2 sm:mb-0 `;
  const secondaryLinkStyle = "bg-white/10 text-white hover:bg-white/20";
  const linkStyle =
    linkType == LINK_TYPES.PRIMARY ? primaryLinkStyle : secondaryLinkStyle;
  return (
    <Link
      to={pathToNavigate || ""}
      type="button"
      className={`${linkStyle} cursor-pointer inline-flex w-full justify-center rounded-md leading-none px-3 py-2 text-sm font-bold sm:w-auto`}
    >
      {label}
    </Link>
  );
};

export const ActionLinks = ({
  primaryLink,
  secondaryLink,
  variant = VARIANTS.INFO,
}: ActionLinks) => {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className="bg-gray-700/25 px-4 py-4 sm:flex sm:flex-row-reverse sm:px-6">
      {!primaryLink.isExternalLink && (
        <InternalLink
          styles={styles}
          label={primaryLink.label}
          pathToNavigate={primaryLink.pathToNavigate}
          linkType={LINK_TYPES.PRIMARY}
        />
      )}
      {primaryLink.isExternalLink && (
        <ExternalLink
          styles={styles}
          label={primaryLink.label}
          pathToNavigate={primaryLink.pathToNavigate}
          linkType={LINK_TYPES.PRIMARY}
        />
      )}
      {secondaryLink && !secondaryLink.isExternalLink && (
        <InternalLink
          styles={styles}
          label={secondaryLink.label}
          pathToNavigate={secondaryLink.pathToNavigate}
          linkType={LINK_TYPES.SECONDARY}
        />
      )}
      {secondaryLink && secondaryLink.isExternalLink && (
        <ExternalLink
          styles={styles}
          label={secondaryLink.label}
          pathToNavigate={secondaryLink.pathToNavigate}
          linkType={LINK_TYPES.SECONDARY}
        />
      )}
    </div>
  );
};
