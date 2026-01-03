type ColorBoxProps = {
  children: React.ReactNode;
  style?: string;
  id?: string;
};
export const ColorBox = ({ children, style = "", id }: ColorBoxProps) => {
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
      id={id}
    >
      {children}
    </div>
  );
};
