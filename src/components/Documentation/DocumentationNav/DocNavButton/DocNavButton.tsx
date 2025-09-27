type DocNavButtonProps = {
  onClick: () => void;
  isOpen: boolean;
  label: string;
};
export const DocNavButton = ({
  onClick,
  label,
  isOpen = false,
}: DocNavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isOpen ? "font-bold border-b-1" : "text-[#dedae3] "
      } relative group text-lg hover:text-white cursor-pointer text-right`}
    >
      <span>{label}</span>
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
    </button>
  );
};
