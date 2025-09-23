type BorderBoxProps = {
  children: React.ReactNode;
  styles?: string;
};

export const BorderBox = ({ children, styles = "" }: BorderBoxProps) => {
  return (
    <div className={`border-1 border-white p-5 w-max ${styles}`}>
      {children}
    </div>
  );
};
