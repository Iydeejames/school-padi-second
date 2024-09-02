import { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheckSquare, FaHashtag } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { IoChevronBackSharp, IoChevronForwardOutline } from "react-icons/io5";

export default function CustomCalendar() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const currentMonth = today.getMonth();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = (month) => {
    const daysInMonth = getDaysInMonth(month, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(month, currentYear);

    const days = [];

    // Previous month days
    const prevMonthDays =
      month === 0
        ? getDaysInMonth(11, currentYear - 1)
        : getDaysInMonth(month - 1, currentYear);
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className="day bg-[#F2F5F7] text-[#DAE1E8] rounded-xl w-12 h-12 flex items-center justify-center"
        >
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month days with status
    const presentDays = [3, 4, 6, 7, 10]; // Example data for present days
    const absentDays = [2, 5]; // Example data for absent days
    const holidayDays = [8, 9]; // Example data for holidays

    for (let day = 1; day <= daysInMonth; day++) {
      let highlightClass = "";

      if (month === currentMonth) {
        // Only apply highlights for the current month
        if (presentDays.includes(day)) {
          highlightClass = "bg-[#E7F6EC] border-2 border-[#0F973D]";
        } else if (absentDays.includes(day)) {
          highlightClass = "bg-red-100 border-2 border-red-500";
        } else if (holidayDays.includes(day)) {
          highlightClass = "bg-[#E7F6EC] border-2 border-[#3599FF]";
        }
      }

      days.push(
        <div
          key={day}
          className={`day ${highlightClass} rounded-xl border w-12 h-12 flex items-center justify-center`}
        >
          {day}
        </div>
      );
    }

    // Next month days
    const totalDays = firstDayOfMonth + daysInMonth;
    const nextMonthDaysCount = 7 - (totalDays % 7);
    if (nextMonthDaysCount < 7) {
      for (let i = 1; i <= nextMonthDaysCount; i++) {
        days.push(
          <div
            key={`next-${i}`}
            className="day bg-[#F2F5F7] text-[#DAE1E8] rounded-xl w-12 h-12 flex items-center justify-center"
          >
            {i}
          </div>
        );
      }
    }

    return days;
  };

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const renderMonths = () => {
    const months = [];
    for (let month = today.getMonth(); month < 12; month++) {
      months.push(
        <div
          key={month}
          className="border border-gray-300  rounded-lg shadow-lg p-4"
        >
          <h3 className="text-center mb-4">
            {new Date(currentYear, month).toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center font-medium text-gray-700 mb-2"
              >
                {day}
              </div>
            ))}
            {renderCalendar(month)}
          </div>
        </div>
      );
    }
    return months;
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-wrap items-center justify-between w-full my-6">
        <div className="flex text-[#8E959C] items-center gap-2 ">
          <button
            onClick={handlePrevYear}
            className="flex items-center px-3 py-2 border rounded-lg bg-white hover:bg-gray-100 shadow-md"
          >
            <IoChevronBackSharp className="mr-2" />
            Previous
          </button>
          <button
            onClick={handleNextYear}
            className="flex items-center px-3 py-2 border rounded-lg bg-white hover:bg-gray-100 shadow-md"
          >
            Next Year
            <IoChevronForwardOutline className="ml-2" />
          </button>
        </div>

        {/** Display legend only for the current month */}
        <div className="flex overflow-x-auto items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#E7F6EC]   rounded-xl flex items-center gap-2 px-2 py-1">
              <FaCheckSquare className="text-[#0F973D]" />{" "}
              <span className="text-[#0F973D]">Present</span>{" "}
              <span className="bg-[#0F973D] p-1 rounded-full text-xs text-white">
                230
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#FBEAE9]   rounded-xl flex items-center gap-2 px-2 py-1">
              <MdCancelPresentation className="text-[#D42620]" />{" "}
              <span className="text-[#D42620]">Absent</span>{" "}
              <span className="bg-[#D42620] p-1 rounded-full text-xs text-white">
                20
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#E6F2FF]   rounded-xl flex items-center gap-2 px-2 py-1">
              <TfiWorld className="text-[#3599FF]" />{" "}
              <span className="text-[#3599FF]">Holiday</span>{" "}
              <span className="bg-[#3599FF] p-1 rounded-full text-xs text-white">
                20
              </span>
            </div>
          </div>
          <div className="flex items-center min-w-72 my-4 gap-2">
            <div className="bg-[#FAFBFC]   rounded-xl flex items-center gap-2 px-2 py-1">
              <FaHashtag className="text-[#8E959C]" />{" "}
              <span className="text-[#8E959C]">Total Days</span>{" "}
              <span className="bg-[#8E959C] p-1 rounded-full text-xs text-white">
                300
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 overflow-x-auto   ">
        {renderMonths()}
      </div>
    </div>
  );
}
