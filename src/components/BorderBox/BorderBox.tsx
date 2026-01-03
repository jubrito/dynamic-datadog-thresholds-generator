type BorderBoxProps = {
  children: React.ReactNode;
  style?: string;
};

export const BorderBox = ({ children, style = "" }: BorderBoxProps) => {
  const padding = style.includes("p-") ? "" : "p-5";
  const borderColor = style.includes("border-") ? "" : "border-white";
  const borderWidth = style.includes("border-") ? "" : "border-1";
  return (
    <div className={`${borderWidth} ${borderColor} ${padding} w-max ${style}`}>
      {children}
    </div>
  );
};
