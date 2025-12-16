import { FaTimes } from "react-icons/fa";
import Modal from "../reusables/modal";
import PropTypes from "prop-types";
import { useState } from "react";
import { studentsData } from "../../utils/constants/_data";
import { Pagination } from "../reusables/filters";

export default function AttendanceModal({
  isOpen,
  onClose,
  handleSelectAllChange,
  selectAllStatus,
  handleAttendanceChange,
  attendanceStatus,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state for current page
  const itemsPerPage = 5; // Number of items per page

  // Calculate the index range for the current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = studentsData.slice(indexOfFirstItem, indexOfLastItem); // Data for the current page

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle the dropdown state
  };

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Set the current page to the selected page
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
    >
      <div className="bg-white border p-6 rounded-lg ">
        <div className="flex justify-between items-center mb-4"></div>
        {/* Modal Content */}
        <div className="mb-4">
          <button
            type="button"
            onClick={toggleDropdown} // Toggle the dropdown on button click
            className="inline-flex justify-center w-[200px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Mark all
          </button>
          {/* Mark All Dropdown Menu with Checkboxes */}
          <div className="relative inline-block text-left">
            {isDropdownOpen && ( // Render dropdown conditionally based on state
              <div className="origin-top-right absolute right-0 top-3 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <label className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      checked={selectAllStatus.present}
                      onChange={() => handleSelectAllChange("present")}
                      className="form-checkbox text-green-500"
                    />
                    <span className="ml-2 text-green-500">Present</span>
                  </label>
                  <label className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      checked={selectAllStatus.absent}
                      onChange={() => handleSelectAllChange("absent")}
                      className="form-checkbox text-red-500"
                    />
                    <span className="ml-2 text-red-500">Absent</span>
                  </label>
                  <label className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      checked={selectAllStatus.holiday}
                      onChange={() => handleSelectAllChange("holiday")}
                      className="form-checkbox text-blue-500"
                    />
                    <span className="ml-2 text-blue-500">Holiday</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Table of students with checkboxes */}
        <div className="overflow-auto">
          <table className="min-w-full border divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S/N
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avatar
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y border divide-gray-200">
              {paginatedData.map((student, idx) => (
                <tr key={student.id} className="border">
                  <td className="px-4 py-2 whitespace-nowrap">{indexOfFirstItem + idx + 1}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {student.name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="rounded border text-[#8E959C] mt-4">
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={studentsData.length} // Use the length of studentsData
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      {/* Modal Actions */}
      <div className="flex w-full mt-4">
        <button
          onClick={onClose}
          className="bg-gray-300 w-full px-4 py-2 rounded-lg mr-2 hover:bg-gray-400 transition-colors"
        >
          Continue
        </button>
        <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Close
        </button>
      </div>
    </Modal>
  );
}

AttendanceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleSelectAllChange: PropTypes.func.isRequired,
  selectAllStatus: PropTypes.object.isRequired,
  handleAttendanceChange: PropTypes.func.isRequired,
  attendanceStatus: PropTypes.object.isRequired,
};
