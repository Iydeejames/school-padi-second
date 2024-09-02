import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTrashAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { MdFilterList, MdPushPin } from "react-icons/md";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "../../../reusables/filters";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import EditIcon from "../../../reusables/icons/EditIcon";
import useModal from "../../../../hooks/useModal";
import SmsModal from "../../../modals/SmsModal";

const SMSLogs = () => {
  const itemsPerPage = 8; // Number of items per page
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page
  const [isOpen, setIsOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null); // Selected row data
  const [selectedCount, setSelectedCount] = useState(0); // Count of selected checkboxes

  const handleRowClick = (item) => {
    setSelectedItem(item); // Set the selected row data
    openModal(); // Open the modal
  };

  const handleModalClose = () => {
    closeModal(false); // Close the modal
    setSelectedItem(null); // Clear the selected data
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedCount((prevCount) => prevCount + 1);
    } else {
      setSelectedCount((prevCount) => prevCount - 1);
    }
  };

  // Mock data for table
  const [tableData] = useState([
    {
      body: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      body: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      body: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
  ]);

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(tableData.slice(start, end));
  }, [currentPage, tableData]);

  return (
    <>
      <div className="p-2 flex justify-start items-center  py-4 ">
        {/* Cards Container */}
        <div className="hidden sm:flex space-x-4">
          <span className="text-[#D3DBE3] border py-1 px-12 rounded flex items-center text-sm leading-none sm:py-2 sm:px-24 sm:text-base mt-[-4px]">
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
        <div className="relative inline-block text-left ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8E959C] border py-1 px-2 rounded flex items-center text-xs leading-none sm:py-1 sm:px-2 sm:text-xs md:py-2 md:px-4 md:text-sm"
          >
            <span className="hidden sm:inline text-xs sm:text-xs md:text-sm">
              ({selectedCount}) Selected
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[#D3DBE3] ml-2 text-xs sm:text-xs md:text-base"
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[600px] overflow-hidden overflow-y-auto">
              <div className="py-1">
                <div className="px-4 py-2 text-xs text-[#8E959C] font-semibold flex items-center">
                  <FaTrashAlt className="text-[#8E959C] mr-2" />
                  Delete
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="py-4">
        <div className="overflow-x-auto py-4">
          <div className="border-0 md:border-2 border-gray-300 rounded-lg p-2">
            <table className="min-w-full table-auto border border-gray-200 rounded-lg">
              <thead className="bg-[#FAFBFC] ">
                <tr>
                  <th className="px-6 py-8 text-middle text-xs sm:text-sm text-[#8E959C]"></th>
                  <th className="px-6 py-8 text-middle text-xs sm:text-sm text-[#8E959C]">
                    Body
                  </th>
                  <th className="px-6 py-8 text-middle text-xs sm:text-sm text-[#8E959C]">
                    Date
                  </th>
                  <th className="px-6 py-8 text-middle text-xs sm:text-sm text-[#8E959C]">
                    Sent To
                  </th>
                  <th className="px-6 py-8 text-middle text-xs sm:text-sm text-[#8E959C]"></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b cursor-pointer"
                    onClick={() => handleRowClick(item)}
                  >
                    <td className="py-2 px-4">
                      <input
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()} // Prevents row click
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    <td className="px-6 py-8 text-xs sm:text-sm text-[#8E959C] whitespace-nowrap">
                      {item.body}
                    </td>
                    <td className="px-6 py-8 text-xs sm:text-sm text-[#8E959C]">
                      {item.date}
                    </td>
                    <td className="px-6 py-8 text-xs sm:text-xs">
                      {item.sentTo.split(", ").map((word, index) => {
                        const colors = [
                          "bg-[#E6F2FF]",
                          "bg-[#E6F2FF]",
                          "bg-[#E6F2FF]",
                          "bg-[#E6F2FF]",
                          "bg-[#E6F2FF]",
                        ];
                        const colorClass = colors[index % colors.length]; // Cycle through colors

                        return (
                          <span
                            key={index}
                            className={`px-2 py-1 mx-1 text-[#027FFF] ${colorClass} rounded`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </td>

                    <td className="py-8 px-4 text-[#8E959C] items-center flex space-x-2 text-xl gap-3">
                      <MdPushPin />
                      <BsFillQuestionCircleFill />
                      <EditIcon />
                      <FaTrash className="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <SmsModal
          selectedItem={selectedItem}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
      {/* Pagination */}
      <div className="rounded border text-[#8E959C]">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={tableData.length}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SMSLogs;
