import { useState } from "react";
import GridView from "./schedule/GridView";
import CalendarView from "./schedule/CalendarView";
import { LuCalendarDays, LuMenu } from "react-icons/lu";

const ScheduleTab = () => {
  const [activeTab, setActiveTab] = useState("grid"); // Default to grid view

  return (
    <div className="xl:p-6 p-2 min-h-screen">
      <div className="flex flex-col gap-10 justify-between mb-4">
        <div>
          <label
            htmlFor="academicSession"
            className="text-sm font-medium text-gray-700"
          >
            Academic Session
          </label>
          <select
            id="academicSession"
            className="ml-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="SY 2024">SY 2024</option>
            {/* Add more options here */}
          </select>
        </div>
        {/* Tab Buttons */}
        <div className="flex items-center justify-start mb-4">
          <button
            className={`flex items-center space-x-1 px-4 py-2 rounded-md ${
              activeTab === "grid"
                ? "bg-[#E6F2FF] text-[#3599FF]"
                : "bg-gray-200 text-[#8E959C]"
            }`}
            onClick={() => setActiveTab("grid")}
          >
            <LuMenu /> <span>Grid View</span>
          </button>
          <button
            className={`flex items-center space-x-1 px-4 py-2 rounded-md ml-2 ${
              activeTab === "calendar"
                ? "bg-[#E6F2FF] text-[#3599FF]"
                : "bg-gray-200 text-[#8E959C]"
            }`}
            onClick={() => setActiveTab("calendar")}
          >
            <LuCalendarDays /> <span>Calendar View</span>
          </button>
        </div>

        {/* Content based on active tab */}
      </div>
      {activeTab === "grid" ? <GridView /> : <CalendarView />}
    </div>
  );
};

export default ScheduleTab;
