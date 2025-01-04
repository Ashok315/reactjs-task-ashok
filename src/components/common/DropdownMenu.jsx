import React, { useState } from "react";

const DropdownMenu = ({ options, defaultOption, width = "w-[126px]" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Set the selected option
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className={`relative inline-block text-lef ${width}`}>
      {/* Dropdown Button */}
      <button
        onClick={handleToggle}
        className="bg-gray-100 text-darkslate bg-offwhite pl-[18px] pr-[12px] py-[6px] rounded border border-lightgray flex items-center justify-between w-full hover:bg-gray-200"
      >
        <span className="text-sm">{selectedOption}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 text-sm bg-white border border-gray-200 rounded shadow-md z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 ${
                selectedOption === option ? "font-semibold text-gray-900" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
