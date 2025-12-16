import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FaExclamation, FaTrashAlt, FaLock, FaSave } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Pagination from "./../../reusables/filters/Pagination";
import { Link } from "react-router-dom";
import { MdFilterList } from "react-icons/md";

const Teachers = () => {
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [, setFilteredData] = useState([]); // Data to display on the current page
  const [openIndex, setOpenIndex] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const teachersData = [
    {
      name: "John Doe",
      id: "12345",
      gender: "Male",
      email: "john@example.com",
      employeeType: "teaching",
      contacts: "123-456-7890",
    },
    {
      name: "Jane Smith",
      id: "67890",
      gender: "Female",
      email: "jane@example.com",
      employeeType: "non-teaching",
      contacts: "098-765-4321",
    },
    {
      name: "Robert Brown",
      id: "11223",
      gender: "Male",
      email: "robert@example.com",
      employeeType: "In-progress",
      contacts: "321-654-9870",
    },
    {
      name: "Emily Johnson",
      id: "44556",
      gender: "Female",
      email: "emily@example.com",
      employeeType: "teaching",
      contacts: "654-987-1234",
    },
    {
      name: "Michael Davis",
      id: "77889",
      gender: "Male",
      email: "michael@example.com",
      employeeType: "In-proress",
      contacts: "987-321-6540",
    },
    {
      name: "Sarah Wilson",
      id: "99001",
      gender: "Female",
      email: "sarah@example.com",
      employeeType: "teaching",
      contacts: "456-789-0123",
    },
    {
      name: "David Clark",
      id: "22334",
      gender: "Male",
      email: "david@example.com",
      employeeType: "teaching",
      contacts: "789-012-3456",
    },
    {
      name: "Laura Allen",
      id: "55667",
      gender: "Female",
      email: "laura@example.com",
      employeeType: "non-teaching",
      contacts: "012-345-6789",
    },
    {
      name: "Daniel King",
      id: "88900",
      gender: "Male",
      email: "daniel@example.com",
      employeeType: "teaching",
      contacts: "543-210-6789",
    },
    {
      name: "Jessica Lee",
      id: "11234",
      gender: "Female",
      email: "jessica@example.com",
      employeeType: "teaching",
      contacts: "678-901-2345",
    },
  ];

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(teachersData.slice(start, end));
  }, [currentPage, teachersData]);

  const dropdownData = [
    { heading: "Academic Session", label: "Select Academic Session", options: ["2023/2024", "2022/2023", "2021/2022"] },
    { heading: "Section", label: "Select Section", options: ["Session 1", "Session 2", "Session 3"] },
    { heading: "Class", label: "Select Class", options: ["Class 1", "Class 2", "Class 3"] },
    { heading: "Subjects", label: "Select Subjects", options: ["Math", "Science", "English"] },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* New Section: Student List Header */}
      <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
        <span className="text-white text-lg leading-none sm:text-xl -mt-2 mb-8">Teachers List</span>
        <Link
          to="/admin/infomation-system/add-teacher"
          className="text-white py-1 px-2 rounded mb-8 flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-0"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
          Add Teacher/Staff
        </Link>
      </div>

      {/* Overlapping White Box */}
      <div className="relative -top-6 px-6">
        <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4">
          {" "}
          {/* Reduced vertical padding */}
          <div className="grid grid-cols-4 gap-2">
            {" "}
            {/* Reduced grid gap */}
            <a href="/infomation-system" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Students</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                12
              </div>
            </a>
            <a
              href="/admin/infomation-system/teachers"
              className="flex flex-col sm:flex-row items-center justify-center"
            >
              <span className="text-blue-600 text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Teachers</span>
              <div className="bg-blue-600 text-[#FFFFFF] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                8
              </div>
            </a>
            <a href="/admin/infomation-system/admin" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Admin</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                3
              </div>
            </a>
            <a
              href="/admin/infomation-system/parents"
              className="flex flex-col sm:flex-row items-center justify-center"
            >
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1  mr-2 sm:mb-0">Parents</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Four Small Rectangles */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 w-full px-4 md:px-20">
        {dropdownData.map((data, index) => (
          <div key={index} className="w-full md:w-[300px] px-2">
            <h2 className="text-[#101828] mb-2">{data.heading}</h2>
            <div
              className="relative bg-white border w-full h-20 rounded-md flex items-center justify-between px-4 cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span className="text-[#D3DBE3]">{data.label}</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-[#D3DBE3]" />
              {openIndex === index && (
                <ul className="absolute top-full left-0 right-0 bg-gray-100 border shadow-lg z-10">
                  {data.options.map((option, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-[#8E959C]">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-2 flex justify-between items-center px-8 py-4 sm:p-4 sm:px-12 lg:px-24">
        {/* Cards Container */}
        <div className="hidden sm:flex space-x-4">
          <span className="text-[#D3DBE3] border py-1 px-24 rounded flex items-center text-sm leading-none sm:py-2 sm:px-32 sm:text-base mt-[-4px]">
            PlaceHolder
          </span>

          <div className="flex border rounded-xl text-[#8E959C] text-md font-semibold p-2 gap-x-4 items-center">
            <span className="text-[#D3DBE3]">Filter</span>
            <MdFilterList />
          </div>
        </div>

        {/* Buttons for Small Screens */}
        <div className="flex sm:hidden space-x-2">
          <button className="bg-blue-500 text-white text-xs font-bold py-2 px-2 rounded w-18 flex items-center justify-center">
            placeholder
          </button>
          <button className="bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded w-16 flex items-center justify-center">
            Filter
          </button>
        </div>
        {/* Selected Button on the Right */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8E959C] border py-1 px-2 rounded flex items-center text-xs leading-none sm:py-1 sm:px-2 sm:text-xs md:py-2 md:px-4 md:text-sm"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1 border rounded-full p-1 text-xs sm:text-xs md:text-base" />
            <span className="hidden sm:inline text-xs sm:text-xs md:text-sm">Selected</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-[#D3DBE3] ml-2 text-xs sm:text-xs md:text-base" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[600px] overflow-hidden overflow-y-auto">
              <div className="py-1">
                <div className="px-4 py-2 text-[#54585C] text-sm font-bold">Subjects</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Students Enrollments</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Elective or Core Subjects Enrollments</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Update Students Enrollment Status</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Update Subjects Enrollment Status</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Assign Degree to Students</div>

                <div className="px-4 py-2 text-[#54585C] text-sm font-bold">Communication</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">This is a subheading for the title</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Send Email</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Send SMS</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Invite to Login (Email)</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Invite to Login (SMS)</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Invite to Login (WhatsApp)</div>

                <div className="px-4 py-2 text-[#54585C] text-sm font-bold">Academics</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">This is a subheading for the title</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Print ID Card</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Print Report Cards</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Enable Report Cards</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Disable Report Cards</div>

                <div className="px-4 py-2 text-[#54585C] text-sm font-bold">Other Actions</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">This is a subheading for the title</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Block</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Unblock</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Move to Alumni</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Delete</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <div className="border-0 md:border-2 border-gray-300 rounded-lg p-2">
            <table className="min-w-full bg-white border border-gray-200 text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#FAFBFC]">
                  <th className="py-2 px-4 text-[#8E959C] border-b"></th>
                  <th className="py-2 px-4 text-[#8E959C] border-b">Name</th>
                  <th className="py-2 px-4  text-[#8E959C] border-b">ID</th>
                  <th className="py-2 px-4  text-[#8E959C] border-b">Gender</th>
                  <th className="py-2 px-4  text-[#8E959C] border-b">Email</th>
                  <th className="py-2 px-4  text-[#8E959C] border-b whitespace-nowrap">Employee Type</th>
                  <th className="py-2 px-4  text-[#8E959C] border-b">Contacts</th>
                  <th className="py-2 px-4  text-[#8E959C] border-b">Icons</th>
                </tr>
              </thead>
              <tbody>
                {teachersData.map((teacher, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">
                      <input type="checkbox" />
                    </td>
                    <td className="py-2 text-[#8E959C] whitespace-nowrap px-4">{teacher.name}</td>
                    <td className="py-2 px-4 text-[#8E959C]">{teacher.id}</td>
                    <td className="py-2 px-4 text-[#8E959C]">{teacher.gender}</td>
                    <td className="py-2 px-4 text-[#8E959C]">{teacher.email}</td>
                    <td
                      className={`py-2 px-4 whitespace-nowrap ${
                        teacher.employeeType === "teaching" ? "text-green-600" : "text-orange-500"
                      }`}
                    >
                      {teacher.employeeType.charAt(0).toUpperCase() + teacher.employeeType.slice(1)}
                    </td>
                    <td className="py-2 px-4 text-[#8E959C] ">{teacher.contacts}</td>
                    <td className="py-2 px-4 flex space-x-2">
                      <Link to="/TeachersProfile">
                        <FaExclamation className="text-[#8E959C]" />
                      </Link>
                      <FaTrashAlt className="text-[#8E959C]" />
                      <FaLock className="text-[#8E959C]" />
                      <FaSave className="text-[#8E959C]" />
                      <FaTrash className="text-[#8E959C]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="rounded border text-[#8E959C]">
        <Pagination
          currentPage={currentPage}
          totalItems={teachersData.length} // Changed from data.length to teachersData.length
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Teachers;
