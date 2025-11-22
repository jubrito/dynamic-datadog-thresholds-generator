import { VARIANTS } from "../utils/constants";

export type Variants = (typeof VARIANTS)[keyof typeof VARIANTS];
