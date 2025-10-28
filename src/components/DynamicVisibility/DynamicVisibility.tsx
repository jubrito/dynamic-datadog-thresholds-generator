import React from "react";
import { Activity, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type WithTooltipProps = {
  triggerComponent: (
    setDisplayContent: React.Dispatch<React.SetStateAction<boolean>>,
    displayContent?: boolean
  ) => React.ReactNode;
  contentComponent: (
    setDisplayContent: React.Dispatch<React.SetStateAction<boolean>>,
    displayContent?: boolean
  ) => React.ReactNode;
  toHideComponent?: (
    setDisplayContent: React.Dispatch<React.SetStateAction<boolean>>,
    displayContent?: boolean
  ) => React.ReactNode;
  isAccordion?: boolean;
  defaultDisplayTooltip?: boolean;
  styles?: {
    triggerComponent: string;
  };
};

const AccordionIcon = ({ isExpanded }: { isExpanded: boolean }) =>
  isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;

export const DynamicVisibility = ({
  triggerComponent,
  contentComponent,
  toHideComponent,
  isAccordion = false,
  defaultDisplayTooltip = false,
  styles = {
    triggerComponent: "",
  },
}: WithTooltipProps) => {
  const [displayContent, setDisplayContent] = useState(defaultDisplayTooltip);
  const contentVisibility = displayContent ? "visible" : "hidden";
  const toHideComponentVisibility = !displayContent ? "visible" : "hidden";

  return (
    <div>
      {isAccordion && (
        <button
          className={`flex justify-between cursor-pointer items-center w-full ${styles.triggerComponent}`}
          onClick={() => setDisplayContent((prev) => !prev)}
        >
          {triggerComponent(setDisplayContent, displayContent)}
          <AccordionIcon isExpanded={displayContent} />
        </button>
      )}
      {!isAccordion && triggerComponent(setDisplayContent, displayContent)}

      <Activity mode={contentVisibility}>
        {contentComponent(setDisplayContent, displayContent)}
      </Activity>
      {toHideComponent && (
        <Activity mode={toHideComponentVisibility}>
          {toHideComponent(setDisplayContent, displayContent)}
        </Activity>
      )}
    </div>
  );
};
