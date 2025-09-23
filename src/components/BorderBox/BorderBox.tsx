type BorderBoxProps = {
  children: React.ReactNode;
  style?: string;
};

export const BorderBox = ({ children, style = "" }: BorderBoxProps) => {
  return (
    <div className={`border-1 border-white p-5 w-max ${style}`}>{children}</div>
  );
};
