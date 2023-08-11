import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="w-full mb-2 border rounded">
      <div className="flex flex-wrap gap-[20px] p-2 justify-between items-center">
        <div className="w-full flex flex-row items-center justify-between gap-[20px]">
          {header}
          <div
            onClick={handleClick}
            className="flex-end flex cursor-pointer justify-end items-center"
          >
            {expanded ? <GoChevronDown /> : <GoChevronLeft />}
          </div>
        </div>
        {expanded && <div className="w-full p-2 border-t">{children}</div>}
      </div>
    </div>
  );
};

export default ExpandablePanel;
