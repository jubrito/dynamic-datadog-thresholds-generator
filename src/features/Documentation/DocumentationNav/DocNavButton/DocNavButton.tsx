import { Link } from "react-router";

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
  return (
    <Link
      to={path}
      className={`${
        isOpen ? "font-bold border-b-1" : "text-[#dedae3] "
      } relative group text-lg hover:text-white cursor-pointer text-right`}
      aria-label={`${label} documentation page`}
    >
      <span>{label}</span>
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
    </Link>
  );
};
