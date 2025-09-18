import { Link } from "react-router";

export const Nav = () => {
  return (
    <nav
      aria-labelledby="main-menu-label"
      className="gap-5 bg-[#0f131e] fixed w-full h-20"
    >
      <div className="max-w-350 my-0 mx-auto">
        <h2 id="main-menu-label" className="sr-only">
          Main Menu
        </h2>
        <ul className="flex px-10 py-5 w-full">
          <li className="py-1 px-3 rounded-md">
            <Link to={"/"}>
              <p className="relative group text-[#dedae3] text-xl hover:text-white cursor-pointer">
                <span>Generator</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-cyan-500 group-hover:w-full"></span>
              </p>
            </Link>
          </li>
          <li className="py-1 px-3 rounded-md">
            <Link to={"/documentation"}>
              <p className="relative group text-[#dedae3] text-xl hover:text-white cursor-pointer">
                <span>Documentation</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-cyan-500 group-hover:w-full"></span>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
