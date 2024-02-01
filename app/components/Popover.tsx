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
        className="cursor-pointer relative"
      >
        {anchor}
        {isPopoverVisible && (
          <div className="absolute left-[84%] top-[-125%] md:top-[-135%]">
            <div className="danger-arrow-left bg-white p-5 m-5 border-green-500 border border-solid rounded text-center align-content-center shadow-xl">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popover;

