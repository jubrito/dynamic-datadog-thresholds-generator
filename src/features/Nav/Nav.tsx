import { NavLink } from "react-router";
import {
  stylesGrayerDarkGrayBlue,
  mainHorizontalSpacing,
} from "../../utils/styles";
import { AnimatedBorderBottom } from "../../components/AnimatedBorderBottom/AnimatedBorderBottom";

export const Nav = () => {
  return (
    <nav
      aria-labelledby="main-menu-label"
      className={`gap-5 ${stylesGrayerDarkGrayBlue.background} fixed w-full h-20 z-1000`}
    >
      <h2 id="main-menu-label" className="sr-only">
        Main Menu
      </h2>
      <div className={`py-5 ${mainHorizontalSpacing}`}>
        <div />
        <ul
          role="navigation"
          className="flex justify-between w-max gap-7 w-full"
          aria-label="Main navigation"
        >
          <li className="py-1 rounded-md">
            <AnimatedBorderBottom>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-cyan-500 font-bold" : "text-[#dedae3] "
                  } relative group text-xl hover:text-[#64e6ff] cursor-pointer`
                }
              >
                <span>Generator</span>
              </NavLink>
            </AnimatedBorderBottom>
          </li>
          <li className="py-1 rounded-md">
            <AnimatedBorderBottom>
              <NavLink
                to={"/documentation"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-cyan-500 font-bold" : "text-[#dedae3] "
                  } relative group text-xl hover:text-[#64e6ff] cursor-pointer`
                }
              >
                <span>Documentation</span>
              </NavLink>
            </AnimatedBorderBottom>
          </li>
        </ul>
        <div />
      </div>
    </nav>
  );
};
