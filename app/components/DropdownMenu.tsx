import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from 'react';

interface DropdownMenuProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, options, onSelect }) => {
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
        className="border border-gray-300 rounded p-2 mr-4 font-semibold text-sm text-gray-500 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <span className="ml-1">
          <FontAwesomeIcon icon={faAngleDown} color="blue" />
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 p-2 bg-white border border-gray-300 rounded">
          {options.map((option) => (
            <div
              key={option}
              className="cursor-pointer p-2 hover:bg-gray-200"
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

