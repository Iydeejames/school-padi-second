/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaExclamation,  FaSave, FaTrash } from 'react-icons/fa';
import Pagination from "../../reusables/filters/Pagination";
import { Link } from "react-router-dom";
import { MdFilterList } from "react-icons/md";

const Administrations = () => {
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const teachersData = [
    { title: 'John Doe', id: '001', category: 'Male', status: 'Active', lastupdated: '123-456-7890' },
    { title: 'Jane Smith', id: '002', category: 'Female', status: 'Inactive', lastupdated: '098-765-4321' },
    { title: 'Robert Brown', id: '003', category: 'Male', status: 'Inactive', lastupdated: '321-654-9870' },
    { title: 'Emily Johnson', id: '004', category: 'Female', status: 'Active', lastupdated: '654-987-1234' },
    { title: 'Michael Davis', id: '005', category: 'Male', status: 'Active', lastupdated: '987-321-6540' },
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



  return (
    <>
      {/* New Section: Student List Header */}
      <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
        <span className="text-white text-lg leading-none sm:text-xl -mt-2 mb-8">Policies</span>
        <Link
          to="/admin/infomation-system/addpolicy"
          className="text-white py-1 px-2 rounded mb-8 flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-0"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
          Add Policy
        </Link>
      </div>

      <div className="p-2 flex justify-between items-center px-8 py-4 sm:p-4 sm:px-12 lg:px-24">
        {/* Cards Container */}
        <div className="hidden sm:flex space-x-4">
  <span className="text-[#D3DBE3] border py-1 px-24 rounded flex items-center text-sm leading-none sm:py-2 sm:px-32 sm:text-base mt-[-4px] ml-4">
    PlaceHolder
  </span>

  <div className="flex border rounded-xl text-[#8E959C] text-md font-semibold p-2 gap-x-4 items-center ml-6">
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
            className="text-[#8E959C] border py-1 px-2 rounded flex items-center text-xs leading-none sm:py-1 sm:px-2 sm:text-xs md:py-2 md:px-4 md:text-sm mr-6"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1 border rounded-full p-1 text-xs sm:text-xs md:text-base" />
            <span className="hidden sm:inline text-xs sm:text-xs md:text-sm">Selected</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-[#D3DBE3] ml-2 text-xs sm:text-xs md:text-base" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[600px] overflow-hidden overflow-y-auto">
              <div className="py-1">
                <div className="px-4 py-2 text-[#54585C] text-sm">Send Email</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Send SMS</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Invite to Login (Email)</div>
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
                  <th className="py-2 px-4 text-[#8E959C] border-b">ID</th>
                  <th className="py-2 px-4 text-[#8E959C] border-b">Title</th>
                  <th className="py-2 px-4 text-[#8E959C] border-b">Category</th>
                  <th className="py-2 px-4 text-[#8E959C] border-b whitespace-nowrap">Status</th>
                  <th className="py-2 px-4 text-[#8E959C] border-b">Last Updated</th>
                  <th className="py-2 px-4 text-[#8E959C] border-b">Icons</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((teacher, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 text-[#8E959C]">{teacher.id}</td>
                    <td className="py-2 px-4 text-[#8E959C]">{teacher.title}</td>
                    <td className="py-2 px-4 text-[#8E959C]">{teacher.category}</td>
                    <td className="py-2 px-4 text-[#8E959C]">
  <span className={`px-2 py-1 rounded-full whitespace-nowrap text-xs ${
    teacher.status === "Active" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"
  }`}>
    {teacher.status}
  </span>
</td>

                    <td className="py-2 px-4 text-[#8E959C]">{teacher.lastupdated}</td>
                    <td className="py-2 px-4">
                      <div className="flex space-x-1">
                        <FaExclamation className="text-[#8E959C] text-xs sm:text-sm" />
                        <FaSave className="text-[#8E959C] text-xs sm:text-sm" />
                        <FaTrash className="text-[#8E959C] text-xs sm:text-sm" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={teachersData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Administrations;
