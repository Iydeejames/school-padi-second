import { FaAngleRight, FaCheckSquare } from "react-icons/fa";
import { GoHash } from "react-icons/go";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TabButton } from "../../../../components/reusables/filters";
import { useState } from "react";
import AttendanceModal from "../../../../components/modals/AttendanceModal";
import { studentsData } from "../../../../utils/constants/_data";
import Submission from "./Submission";
import { BiArrowBack } from "react-icons/bi";

// Function to generate days in a month
const generateDaysInMonth = (month, year) => {
  const daysInMonth = new Date(year, month, 0).getDate(); // Get number of days in the month
  return Array.from({ length: daysInMonth }, (_, i) => i + 1); // Generate an array [1, 2, ..., daysInMonth]
};

// Sample data for students

const tabs = ["Manage", "Attendance Submission Analytics"];

const AttendanceTable = () => {
  const month = 6; // Example: June (6th month)
  const year = 2024; // Example Year
  const days = generateDaysInMonth(month, year);
  const [activeTab, setActiveTab] = useState("Manage");
  const [attendanceStatus, setAttendanceStatus] = useState({}); // State for student attendance
  const [selectedDate, setSelectedDate] = useState(days[0]); // State for selected date

  const [selectAllStatus, setSelectAllStatus] = useState({
    present: false,
    absent: false,
    holiday: false,
  }); // State for "Mark All" checkbox options

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const statusIcons = {
    present: <FaCheckSquare className="text-[green] text-2xl" />,
    absent: <MdOutlineCancelPresentation className="text-[#D42620] text-2xl" />,
    holiday: <TbWorld className="text-[#3599FF] text-2xl" />,
    null: <GoHash className="text-[#8E959C] text-2xl" />,
  };

  // Function to handle modal open
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(!true);
  };

  // Function to handle modal close

  // Function to handle attendance change for a student
  const handleAttendanceChange = (studentId, status) => {
    setAttendanceStatus((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  // Function to handle "Mark All" selection
  const handleMarkAll = (status) => {
    const updatedStatus = {};
    studentsData.forEach((student) => {
      updatedStatus[student.id] = status;
    });
    setAttendanceStatus(updatedStatus);
  };

  // Function to handle checkbox change in "Mark All" dropdown
  const handleSelectAllChange = (status) => {
    const newSelectAllStatus = { ...selectAllStatus };
    newSelectAllStatus[status] = !selectAllStatus[status];
    setSelectAllStatus(newSelectAllStatus);

    if (newSelectAllStatus[status]) {
      handleMarkAll(status);
    }
  };

  return (
    <section>
      {/* Header Section */}
      <div className="flex -mt-12 -xl:mt-5 justify-between text-white items-center w-full">
        <Link
          to={"/t/learning-module/"}
          className=" px-4 py-2 rounded-lg flex items-center gap-2 "
        >
          <BiArrowBack /> <span> Back</span>
        </Link>
      </div>

      {/* Tab Section */}
      <div className="bg-white rounded-2xl overflow-x-auto shadow-lg -mt-2 xl:mt-4">
        <TabButton
          isBorder
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
      </div>

      {/* Manage Tab Content */}
      {activeTab === "Manage" && (
        <div className="p-6 bg-white shadow-md rounded-lg ">
          {/* Select Input for Date Selection */}
          <div className="flex xl:flex-row flex-col justify-between xl:items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <FaAngleRight className="text-[#027FFF]" size={24} />
              <h3 className="text-[#027FFF]">Mathematics</h3> <span>/</span>
              <span>Class</span>
            </div>
            {/* Select Input */}
            <div className="flex items-center gap-4">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                {days.map((day) => (
                  <option key={day} value={day}>
                    {`Day ${day}`}
                  </option>
                ))}
              </select>

              {/* Button to Trigger Modal */}
              <div className="flex justify-end ">
                <button
                  onClick={handleOpenModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Take Attendance
                </button>
              </div>
            </div>
          </div>

          {/* Attendance Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border text-[#8E959C] border-gray-200 px-4 py-2 text-left">
                    S/N
                  </th>
                  <th className="border text-[#8E959C] border-gray-200 px-4 py-2 text-left">
                    Student
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="border text-[#8E959C] font-normal border-gray-200 px-4 py-2 text-center"
                    >
                      {`Day ${day}`}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {studentsData.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-200 px-4 py-2">
                      {student.id}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 min-w-48 flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={attendanceStatus[student.id] ? true : false}
                        onChange={() =>
                          handleAttendanceChange(
                            student.id,
                            attendanceStatus[student.id] ? "" : "present"
                          )
                        }
                        className="form-checkbox text-blue-500"
                      />
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{student.name}</span>
                    </td>
                    {days.map((_, dayIndex) => (
                      <td
                        key={dayIndex}
                        className="border border-gray-200 px-4 py-2 text-center"
                      >
                        {statusIcons[student.attendance[dayIndex]] ||
                          statusIcons["null"]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeTab === "Attendance Submission Analytics" && <Submission />}

      {/* Modal for Taking Attendance */}
      {isModalOpen && (
        <AttendanceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          handleAttendanceChange={handleAttendanceChange}
          selectAllStatus={selectAllStatus}
          attendanceStatus={attendanceStatus}
          handleSelectAllChange={handleSelectAllChange}
        />
      )}
    </section>
  );
};

export default AttendanceTable;
