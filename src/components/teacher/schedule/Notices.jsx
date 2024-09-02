import { useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";
import useModal from "../../../hooks/useModal";
import NoticeModal from "../../modals/NoticeModal";
import { Pagination } from "../../reusables/filters";

 function NoticeComponent() {
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
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
      },
      {
        title: "Introduction to Class",
        description: "Dear All, We dearly welcome you all to SchoolPadi.",
        date: "02-07-2024",
        from: "Admins",
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
                      From
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
                       
                          
                            <span
                              key={index}
                              className={`px-2 py-1 mx-1 text-blue-500 bg-blue-100 rounded`}
                            >
                              {item.from}
                            </span>
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
        <NoticeModal selectedItem={selectedItem} isOpen={isOpen} onClose={handleModalClose} />
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
    )
  }

export default function Notices() {

  return (
    <div>
      <div className="p-2 flex justify-start items-center px-2 py-4 sm:p-4 sm:px-6 lg:px-12">
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
      
      </div>

      <NoticeComponent />
      {/* {
    tabItem  === "Sent" && <SentTab />
} */}
      {/* {tabItem === "Received" ? <ReceivedTab /> : <SentTab />} */}
    </div>
  );
}
