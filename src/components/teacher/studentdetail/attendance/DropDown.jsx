import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Dropdown({ options, label, placeholder, searchPlaceholder, onSelect }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);  // Close the dropdown when an option is selected
    onSelect(value);  // Pass the selected value to the parent component
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-72 " ref={dropdownRef}>
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div 
        className="relative w-full py-3 h-16 border border-gray-300 rounded-lg pl-4 pr-8 cursor-pointer flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span className={`text-[#D3DBE3] ${selectedValue ? 'text-gray-900' : ''}`}>
          {selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}
        </span>
        {isOpen ? (
          <IoIosArrowUp className="text-gray-400" />
        ) : (
          <IoIosArrowDown className="text-gray-400" />
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-2">
            <div className="relative mb-2">
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="w-full pl-4 pr-8 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <ul>
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(option.value)}
                >
                  <input
                    type="radio"
                    name="dropdownOption"
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={() => handleSelect(option.value)}
                    className="mr-2"
                  />
                  <span className="text-[#54585C]">{option.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,  // Function to handle the selection
};

Dropdown.defaultProps = {
  label: '',
  placeholder: 'Select an option',
  searchPlaceholder: 'Search...',
};
