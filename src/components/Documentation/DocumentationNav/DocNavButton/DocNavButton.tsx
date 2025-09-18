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
        isOpen ? "text-indigo-300 font-bold" : "text-[#dedae3] "
      } relative group text-md hover:text-white cursor-pointer`}
    >
      <span>{label}</span>
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
    </button>
  );
};
