import { Link } from "react-router";

type AnimatedBorderBottomProps = {
  borderStyle?: string;
  children?: React.ReactNode;
  link?: {
    role?: string;
    path: string;
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

  if (link) {
    return (
      <Link
        to={link.path}
        className={`relative group ${link.style}`}
        role={link.role}
        {...defaultLinkProps}
      >
        {children}
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
