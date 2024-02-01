import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from 'react';

interface DropdownMenuProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  width?: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, options, onSelect, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-flex">
      <button
        className="border border-gray-300 rounded px-4 py-2 mr-4 font-semibold text-sm text-gray-500 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <span className="ml-1">
          <FontAwesomeIcon icon={faAngleDown} color="blue" />
        </span>
      </button>
      {isOpen && (
        <div 
          className={`absolute z-10 right-4 mt-10 p-2 bg-white border border-gray-300 rounded overflow-y-auto max-h-48`}
          style={{ width: width ? `${width}px` : 'auto' }}
        >
          {options.map((option, index) => (
            <div
              key={option}
              className={`cursor-pointer p-2 hover:bg-gray-200 ${
                index !== options.length - 1 ? 'border-b border-gray-300' : '' 
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
