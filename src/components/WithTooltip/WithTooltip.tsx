import React from "react";
import { Activity, useState } from "react";

type WithTooltipProps = {
  triggerComponent: (
    setDisplayTooltip: React.Dispatch<React.SetStateAction<boolean>>,
    displayTooltip?: boolean
  ) => React.ReactNode;
  tooltipComponent: (
    setDisplayTooltip: React.Dispatch<React.SetStateAction<boolean>>,
    displayTooltip?: boolean
  ) => React.ReactNode;
  defaultDisplayTooltip?: boolean;
};

export const WithTooltip = ({
  triggerComponent,
  tooltipComponent,
  defaultDisplayTooltip = false,
}: WithTooltipProps) => {
  const [displayTooltip, setDisplayTooltip] = useState(defaultDisplayTooltip);
  const tooltipVisibility = displayTooltip ? "visible" : "hidden";

  return (
    <>
      {triggerComponent(setDisplayTooltip, displayTooltip)}
      <Activity mode={tooltipVisibility}>
        {tooltipComponent(setDisplayTooltip, displayTooltip)}
      </Activity>
    </>
  );
};
