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
        <div className="danger-arrow-left bg-white p-5 m-5 border-green-400 border border-solid rounded text-center align-content-center">
         {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
