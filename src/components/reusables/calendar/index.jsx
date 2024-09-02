import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  setMonth,
  getYear,
  setYear,
  isSameDay,
} from 'date-fns';

const Calendar = ({ initialDate, onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState(initialDate || new Date());
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(setMonth(currentMonth, newMonth));
    setIsMonthDropdownOpen(false);
  };

  const handleYearChange = (newYear) => {
    setCurrentMonth(setYear(currentMonth, newYear));
    setIsYearDropdownOpen(false);
  };

  const renderHeader = () => {
    const monthOptions = Array.from({ length: 12 }, (_, i) => (
      <div
        key={i}
        onClick={() => handleMonthChange(i)}
        className="cursor-pointer hover:bg-gray-100 p-2"
      >
        {format(setMonth(new Date(), i), 'MMMM')}
      </div>
    ));

    const yearOptions = Array.from({ length: 10 }, (_, i) => {
      const year = getYear(new Date()) - 5 + i;
      return (
        <div
          key={year}
          onClick={() => handleYearChange(year)}
          className="cursor-pointer hover:bg-gray-100 p-2"
        >
          {year}
        </div>
      );
    });

    return (
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center relative">
          <button onClick={prevMonth} className="mr-2">
            &#8249;
          </button>
          <div className="relative">
            <div
              onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
              className="cursor-pointer bg-white border border-gray-300 rounded-md text-xl font-semibold p-1 mr-2"
            >
              {format(currentMonth, 'MMMM')}
            </div>
            {isMonthDropdownOpen && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg mt-1">
                {monthOptions}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
              className="cursor-pointer bg-white border border-gray-300 rounded-md text-xl font-semibold p-1"
            >
              {getYear(currentMonth)}
            </div>
            {isYearDropdownOpen && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg mt-1">
                {yearOptions}
              </div>
            )}
          </div>
          <button onClick={nextMonth} className="ml-2">
            &#8250;
          </button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Add Event
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const emojis = ['🐢', '☕', '🐪', '🧠', '🍸', '🎉', '🐱'];
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex flex-col justify-center items-center py-2" key={i}>
          <span>{emojis[i]}</span>
          <span>{format(addDays(startDate, i), 'EEE')}</span>
        </div>
      );
    }
    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    const eventDate = new Date(2024, 0, 15); // Example event date
    const eventDetails = {
      title: 'Meeting with Team',
      time: '10:00 AM - 11:00 AM',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-700',
    };

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;

        // Check if the current day is the event day
        const isEventDay = isSameDay(day, eventDate);

        days.push(
          <div
            className={`p-2 text-center h-20 border border-gray-200 relative ${
              isEventDay ? `${eventDetails.bgColor} ${eventDetails.borderColor}` : ''
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span
              className={
                format(currentMonth, 'M') !== format(day, 'M')
                  ? 'text-gray-400'
                  : 'text-gray-800'
              }
            >
              {formattedDate}
            </span>
            {isEventDay && (
              <div className={`absolute bottom-1 left-1 right-1 p-1 ${eventDetails.textColor}`}>
                <h4 className="text-xs font-bold">{eventDetails.title}</h4>
                <p className="text-xs">{eventDetails.time}</p>
              </div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="w-full  mx-auto bg-white rounded-lg shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

Calendar.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  onDateClick: PropTypes.func,
};

Calendar.defaultProps = {
  initialDate: new Date(),
  onDateClick: () => {},
};

export default Calendar;
