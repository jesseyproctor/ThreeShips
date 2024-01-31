import React, { ReactNode, useState } from "react";

interface PopoverProps {
    anchor: ReactNode;
    children: ReactNode;
  }

const Popover: React.FC<PopoverProps> = ({ anchor, children }) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const handleMouseEnter = () => {
    setPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setPopoverVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer"
      >
        {anchor}
      </div>
      {isPopoverVisible && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-4 bg-white border rounded-lg shadow-md">
          <div className="relative">
            <div className="border-t-10 border-r-10 border-b-10 border-transparent border-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"></div>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
