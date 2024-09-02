import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdArrowDropDown } from 'react-icons/md';

const DropdownFilter = ({ options, selectedOptions, onOptionToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionToggle = (option) => {
    onOptionToggle(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const selectedCount = selectedOptions.length;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-44 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {selectedCount > 0 ? `${selectedCount} Selected` : 'Select'}
        <MdArrowDropDown className="ml-2 h-5 w-5" />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <div
                key={option.value}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleOptionToggle(option)}
              >
                <span className="mr-2">{option.icon}</span>
                <span className="text-gray-700">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DropdownFilter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,  // New icon prop
    })
  ).isRequired,
  selectedOptions: PropTypes.string.isRequired,
  onOptionToggle: PropTypes.func.isRequired,
};

export default DropdownFilter;
