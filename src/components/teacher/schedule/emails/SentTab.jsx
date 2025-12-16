import { Pagination } from "../../../reusables/filters";
import {
  FaTrash,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import EditIcon from "../../../reusables/icons/EditIcon";
import NoticeModal from "../../../modals/NoticeModal";
import useModal from "../../../../hooks/useModal";
import {  MdPushPin } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function SentTab() {
  const itemsPerPage = 8; // Number of items per page
  const { isOpen, openModal, closeModal } = useModal();

  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page

  const [selectedItem, setSelectedItem] = useState(null); // Selected row data
  const [selectedCount, setSelectedCount] = useState(0); // Count of selected checkboxes
  console.log(selectedCount)

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
  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Mock data for table
  const [tableData] = useState([
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi.",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
  ]);

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(tableData.slice(start, end));
  }, [currentPage, tableData]);
  return (
    <div>
      {/* Table */}
      <div className="px-4  py-4">
        <div className="overflow-x-auto px-4 py-4">
          <div className="border-0 md:border-2 border-gray-300 rounded-lg p-2">
            <table className="min-w-full table-auto border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 ">
                <tr>
                  <th className="px-6 py-8 text-middle text-xs sm:text-sm text-[#8E959C]"></th>
                  <th className="px-6 py-8 text-middle text-xs sm:text-sm text-[#8E959C]">
                    Title
                  </th>
                  <th className="px-6 py-8 text-middle text-xs sm:text-sm text-[#8E959C]">
                    Description
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
                    <td className="px-6 py-8 text-xs sm:text-sm text-[#8E959C]">
                      {item.title}
                    </td>
                    <td className="px-6 py-8 text-xs sm:text-sm text-[#8E959C] whitespace-nowrap">
                      {item.description}
                    </td>
                    <td className="px-6 py-8 text-xs sm:text-sm text-[#8E959C]">
                      {item.date}
                    </td>
                    <td className="px-6 py-8 text-xs sm:text-xs">
                      {item.sentTo.split(", ").map((word, index) => {
                        const colors = [
                          "bg-blue-100",
                          "bg-blue-100",
                          "bg-blue-100",
                          "bg-blue-100",
                          "bg-blue-100",
                        ];
                        const colorClass = colors[index % colors.length]; // Cycle through colors

                        return (
                          <span
                            key={index}
                            className={`px-2 py-1 mx-1 text-blue-500 ${colorClass} rounded`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </td>

                    <td className="py-8 px-4 flex items-center text-[#8E959C] gap-3 text-sm">
                      <MdPushPin  />
                      <BsFillQuestionCircleFill  />
                      <EditIcon />
                      <FaTrash className="text-[#8E959C]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative bg-white p-8 rounded shadow-lg max-w-md mx-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 border text-[#8E959C] text-xs px-2 py-1 rounded"
            >
              X
            </button>
            <h3 className="text-2xl mt-4 mb-4">{selectedItem.title}</h3>
            <p className="text-[#8E959C] text-xs">{selectedItem.description}</p>
            {/* Content */}
            <div className="relative mt-24">
              {/* Faint line above the text */}
              <div className="absolute left-0 right-0 top-[-8px]  h-[1px] bg-gray-200"></div>

              {/* Add a big space above the content */}
              <div className="flex items-center flex-wrap mt-8">
                <p className="text-[#8E959C] text-xs mr-2">Publish To</p>
                {selectedItem.sentTo.split(", ").map((word, index) => {
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
                      className={`px-1 mx-1 text-white text-xs ${colorClass} rounded`}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal */}
      {isOpen && selectedItem && (
        <NoticeModal
          selectedItem={selectedItem}
          isOpen={isOpen}
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
    </div>
  );
}
