import { NavLink } from "react-router";
import { mainVerticalSpacing } from "../../utils/styles";

export const Nav = () => {
  return (
    <nav
      aria-labelledby="main-menu-label"
      className="gap-5 bg-[#0f131e] fixed w-full h-20 z-1000"
    >
      <h2 id="main-menu-label" className="sr-only">
        Main Menu
      </h2>
      <div className={`py-5 my-0 mx-auto ${mainVerticalSpacing}`}>
        <ul className="col-start-2 col-end-3 flex justify-between w-max gap-7 w-full">
          <li className="py-1 rounded-md">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-cyan-500" : "text-[#dedae3] "
                } relative group text-xl hover:text-white cursor-pointer`
              }
            >
              <span>Generator</span>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-cyan-500 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="py-1 rounded-md">
            <NavLink
              to={"/documentation"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-cyan-500" : "text-[#dedae3] "
                } relative group text-xl hover:text-white cursor-pointer`
              }
            >
              <p className="relative group text-xl hover:text-white cursor-pointer">
                <span>Documentation</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-cyan-500 group-hover:w-full"></span>
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
