type ColorBoxProps = {
  children: React.ReactNode;
  style?: string;
};
export const ColorBox = ({ children, style = "" }: ColorBoxProps) => {
  const defaultBackgroundColor = "bg-cyan-500";
  const defaultDynamicStyles = !style.includes("bg-")
    ? defaultBackgroundColor
    : "";
  return (
    <div
      className={`p-3 px-15 text-black font-bold ${defaultDynamicStyles} ${style}`}
    >
      {children}
    </div>
  );
};
