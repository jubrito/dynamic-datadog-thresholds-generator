type ColorBoxProps = {
  children: React.ReactNode;
  style?: string;
};
export const ColorBox = ({ children, style = "" }: ColorBoxProps) => {
  const defaultBackgroundColor = "bg-cyan-500";
  const defaultDynamicStyles = !style.includes("bg-")
    ? defaultBackgroundColor
    : "";
  const padding = `${style.includes("p-") ? "" : "p-3"}`;
  const paddingHorizontal = `${style.includes("px-") ? "" : "px-15"}`;
  const paddingStyle = padding + " " + paddingHorizontal;

  return (
    <div
      className={`${paddingStyle} text-black font-bold ${defaultDynamicStyles} ${style}`}
    >
      {children}
    </div>
  );
};
