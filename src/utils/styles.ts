import { VARIANTS } from "./constants";

export const mainHorizontalSpacing =
  "mx-auto grid 2xl:grid-cols-[300px_1fr_300px] xl:grid-cols-[250px_1fr_250px] lg:grid-cols-[200px_1fr_200px] md:grid-cols-[150px_1fr_150px] grid-cols-[30px_1fr_30px]";

export const mainTopSpacing = "mt-5 bg-";

export const VARIANT_STYLES = {
  [VARIANTS.ERROR]: {
    bg: "bg-red-500",
    shadow: "bg-red-500/10",
    icon: "text-red-500",
    bgText: "text-white",
    bgHover: "hover:bg-red-600",
  },
  [VARIANTS.WARNING]: {
    bg: "bg-orange-500",
    shadow: "bg-orange-500/10",
    icon: "text-orange-500",
    bgText: "text-black",
    bgHover: "hover:bg-orange-600",
  },
  [VARIANTS.INFO]: {
    bg: "bg-cyan-500",
    shadow: "bg-cyan-500/10",
    icon: "text-cyan-500",
    bgText: "text-black-500",
    bgHover: "hover:bg-cyan-600",
  },
} as const;

export const stylesMainBlue = {
  background: "bg-[#0b1220]",
  border: "border-[#0b1220]",
  shadow: "shadow-[#0b1220]",
};

export const stylesDarkGrayBlue = {
  background: "bg-[#051027]",
  border: "border-[#051027]",
};
export const stylesMediumGrayBlue = {
  background: "bg-[#0e1b37]",
  border: "border-[#0e1b37]",
};
export const stylesGrayerDarkGrayBlue = {
  background: "bg-[#0d1222]",
  shadow: "shadow-[#0b1220]",
};
