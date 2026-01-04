import { AnimatedBorderBottom } from "../../../../components/AnimatedBorderBottom/AnimatedBorderBottom";

type DocNavButtonProps = {
  isOpen: boolean;
  label: string;
  path: string;
};

export const DocNavButton = ({
  path,
  label,
  isOpen = false,
}: DocNavButtonProps) => {
  const style = `${
    isOpen ? "font-bold border-b-1" : "text-[#dedae3] "
  } relative group text-lg hover:text-white cursor-pointer text-right border-b-1`;
  return (
    <AnimatedBorderBottom
      borderStyle="bg-indigo-500"
      link={{
        path,
        style,
      }}
      aria-label={`${label} documentation page`}
    >
      <span>{label}</span>
    </AnimatedBorderBottom>
  );
};
