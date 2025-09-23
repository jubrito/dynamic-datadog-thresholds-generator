type ColorBoxProps = {
  children: React.ReactNode;
  style?: string;
};
export const ColorBox = ({ children, style = "" }: ColorBoxProps) => {
  return (
    <div className={`bg-cyan-500 p-3 px-15 text-black font-bold ${style}`}>
      {children}
    </div>
  );
};
