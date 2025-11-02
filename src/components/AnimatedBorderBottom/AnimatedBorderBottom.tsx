import { Link } from "react-router";

type AnimatedBorderBottomProps = {
  borderStyle?: string;
  children?: React.ReactNode;
  link?: {
    path: string;
    label: string;
    style?: string;
  };
};

export const AnimatedBorderBottom = ({
  borderStyle,
  children,
  link,
  ...defaultLinkProps
}: AnimatedBorderBottomProps) => {
  const borderDefaultColor = borderStyle?.includes("bg-") ? "" : "bg-cyan-500";
  const defaultLink = !children && link;
  const defaultBorderStyle = `absolute -bottom-1 left-0 w-0 transition-all h-0.5 group-hover:w-full ${
    borderDefaultColor ?? ""
  } ${borderStyle ?? ""}`;

  if (!link && !children) return null;

  const animatedBorder = (
    <span
      className={defaultBorderStyle}
      aria-hidden="true"
      data-testid="animated-border-bottom"
    />
  );

  if (defaultLink) {
    return (
      <Link
        to={link.path}
        className={`relative group ${link.style}`}
        {...defaultLinkProps}
      >
        <span>{link.label}</span>
        {animatedBorder}
      </Link>
    );
  }

  return (
    <>
      <div className="relative group">{children}</div>
      {animatedBorder}
    </>
  );
};
