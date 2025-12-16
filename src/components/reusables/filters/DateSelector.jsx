import  { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Arrow icon from react-icons
import PropTypes  from "prop-types"

const DateSelector = ({ onDateChange }) => {
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    if (onDateChange) {
      onDateChange(selectedDate);
    }
  };

  return (
    <div className="relative">
       <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="p-2 border border-gray-300 rounded-md pl-10 pr-4"
      />
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">
        <FaChevronDown />
      </div>
    </div>
  );
};
DateSelector.propTypes ={
  onDateChange: PropTypes.func,
}

export default DateSelector;
