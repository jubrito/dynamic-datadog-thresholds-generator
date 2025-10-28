import React from "react";
import { Activity, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type DynamicVisibilityProps = {
  triggerComponent: (
    setDisplayContent: React.Dispatch<React.SetStateAction<boolean>>,
    displayContent?: boolean,
    ariaControlsIds?: string,
    isExpanded?: boolean
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
}: DynamicVisibilityProps) => {
  const [displayContent, setDisplayContent] = useState(defaultDisplayTooltip);
  const contentVisibility = displayContent ? "visible" : "hidden";
  const toHideComponentVisibility = !displayContent ? "visible" : "hidden";
  const toHideComponentId = "to-hide-component-id";
  const contentComponentId = "content-component-id";
  const controls = `${contentComponentId} ${
    toHideComponent ? toHideComponentId : ""
  }`;

  return (
    <div>
      {isAccordion && (
        <button
          className={`flex justify-between cursor-pointer items-center w-full ${styles.triggerComponent}`}
          onClick={() => setDisplayContent((prev) => !prev)}
          aria-controls={controls}
          aria-expanded={`${!!displayContent}`}
        >
          {triggerComponent(setDisplayContent, displayContent)}
          <AccordionIcon isExpanded={displayContent} />
        </button>
      )}
      {!isAccordion &&
        triggerComponent(
          setDisplayContent,
          displayContent,
          controls,
          displayContent
        )}

      <Activity mode={contentVisibility}>
        <div id={contentComponentId}>
          {contentComponent(setDisplayContent, displayContent)}
        </div>
      </Activity>
      {toHideComponent && (
        <Activity mode={toHideComponentVisibility}>
          <div id={toHideComponentId}>
            {toHideComponent(setDisplayContent, displayContent)}
          </div>
        </Activity>
      )}
    </div>
  );
};
