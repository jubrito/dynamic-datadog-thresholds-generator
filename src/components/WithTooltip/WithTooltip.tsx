import React from "react";
import { Activity, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type WithTooltipProps = {
  triggerComponent: (
    setDisplayTooltip: React.Dispatch<React.SetStateAction<boolean>>,
    displayTooltip?: boolean
  ) => React.ReactNode;
  tooltipComponent: (
    setDisplayTooltip: React.Dispatch<React.SetStateAction<boolean>>,
    displayTooltip?: boolean
  ) => React.ReactNode;
  isAccordion?: boolean;
  defaultDisplayTooltip?: boolean;
};

const AccordionIcon = ({ isExpanded }: { isExpanded: boolean }) =>
  isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;

export const WithTooltip = ({
  triggerComponent,
  tooltipComponent,
  isAccordion,
  defaultDisplayTooltip = false,
}: WithTooltipProps) => {
  const [displayTooltip, setDisplayTooltip] = useState(defaultDisplayTooltip);
  const tooltipVisibility = displayTooltip ? "visible" : "hidden";

  return (
    <div>
      {isAccordion && (
        <button
          className="flex justify-between cursor-pointer items-center w-full"
          onClick={() => setDisplayTooltip((prev) => !prev)}
        >
          {triggerComponent(setDisplayTooltip, displayTooltip)}
          <AccordionIcon isExpanded={displayTooltip} />
        </button>
      )}
      {!isAccordion && triggerComponent(setDisplayTooltip, displayTooltip)}

      <Activity mode={tooltipVisibility}>
        {tooltipComponent(setDisplayTooltip, displayTooltip)}
      </Activity>
    </div>
  );
};
