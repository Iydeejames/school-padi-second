import { faChevronDown, faListSquares, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import d from "../../../assets/schoolpadi-img/3d.svg";
import { FaSave, FaTrashAlt } from "react-icons/fa";
import { FiPlus, FiSearch } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";
import { FaPencil } from "react-icons/fa6";
import ModalWrap from "../../reusables/modal/modal";
import { LogisticsMatrics, logisticsTableData, resourceMatrics, resourceTableData } from "../../../assets/data";

export default function People() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0); // Count of selected checkboxes
  const [filteredLogistics, setFilteredLogistics] = useState(logisticsTableData); // Filtered logistics data
  const [filteredResources, setFilteredResources] = useState(resourceTableData); // Filtered resources data
  const [LogisticsDetails, setLogisticsDetails] = useState();
  const [isModal, setIsModal] = useState(false);
  const [resourcesDetails, setResourcesDetails] = useState();

  const tableLogisticsDetails = (data) => {
    setResourcesDetails();
    setLogisticsDetails(data);
    setIsModal(!isModal);
  };

  const tableResourcesDetails = (data) => {
    setLogisticsDetails();
    setResourcesDetails(data);
    setIsModal(!isModal);
  };

  // Function filters logistics data based on search input
  const handleSearchLogistics = (e) => {
    const filteredData = logisticsTableData.filter((item) => {
      return (
        item.id.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.requester.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.department.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.number.toString().toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.dateOfAllocation.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.endOfAllocation.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredLogistics(filteredData ? filteredData : logisticsTableData);
  };

  // Function filters Resources data based on search input
  const handleSearchResources = (e) => {
    const filteredData = resourceTableData.filter((item) => {
      return (
        item.id.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.resources.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.type.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.number.toString().toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.dateOfApplication.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredResources(filteredData ? filteredData : resourceTableData);
  };

  return (
    <div className="">
      {" "}
      {/* New Section: Student List Header */}
      <div className="bg-[#014F9E] pb-10  flex justify-between items-center  p-2 md:px-6">
        <span className="text-white  leading-none md:text-2xl text-sm  -mt-2">Resources</span>
        <Link
          to="/admin/people/add-resources"
          className="bg-primary hover:bg-primary/80  text-white md:px-4 px-2 md:py-3 py-2 rounded-lg  flex items-center leading-none  md:text-sm text-xs "
        >
          <FontAwesomeIcon icon={faPlus} className=" mr-2" />
          Add Resource
        </Link>
      </div>
      <div className="px-[2%]">
        {/* New Section: Student List */}
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 relative -top-6  ">
          {resourceMatrics.map((matric, index) => (
            <div key={index} className="border bg-white shadow-md md:p-4 p-2 rounded-xl">
              <div className="flexBetween">
                <div className="  ">
                  <div className="text-[#C8D2DC] text-[.6875rem] md:text-base">{matric.title}</div>
                  <div className="text-[#6E7479] md:text-2xl  font-bold">{matric.number}</div>
                </div>
                <div className="w-8 h-8 justify-center items-center flex bg-[#E6F2FF] rounded-lg ">
                  <img src={d} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <div className="flex md:flex-row flex-col gap-2 justify-between md:mt-4">
            {/* Buttons for Small Screens */}
            <div className="flex space-x-2 ">
              <div className="flex gap-2 text-[#8E959C] border md:w-[18.75rem] items-center w-[15.625rem]  rounded-md px-2  ">
                <FiSearch className=" " />
                <input
                  type="text"
                  placeholder="Search resources"
                  className=" placeholder:text-sm md:text-sm h-full text-xs w-full focus:outline-none "
                  onChange={handleSearchResources}
                />
              </div>
              <div className="flex text-gray-400 items-center gap-2 border rounded-md px-2 py-1 ">
                <span className="text-sm">Filter</span>
                <BiFilter />
              </div>
            </div>

            {/* Selected Button on the Right */}
            <div className=" relative inline-block text-left ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#8E959C] border py-1 px-2 rounded flex items-center text-xs leading-none"
              >
                <span className=" inline text-sm">({selectedCount}) Selected</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-[#D3DBE3] ml-2 text-xs  md:text-base" />
              </button>

              {isOpen && (
                <div className="absolute md:right-0 left-0 mt-1 w- rounded-md shadow-lg bg-white border text-[#8E959C] hover:text-red-500 cursor-pointer ">
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs   flex items-center">
                      <FaTrashAlt className=" mr-2" />
                      Delete
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* data table */}

          <div className="border overflow-auto rounded-lg shadow my-4 p-4 relative">
            <table className="min-w-full table-auto border rounded-md text-[#8E959C]  ">
              <thead className="text-left bg-[#FAFBFC] text-xs">
                <tr>
                  <th className="px-6  py-4 ">ID</th>
                  <th className="px-6  py-4 ">Resource</th>
                  <th className="px-6  py-4 ">Number</th>
                  <th className="px-6  py-4 ">Type</th>
                  <th className="px-6  py-4 ">Status</th>
                  <th className="px-6  py-4 ">Application Date</th>
                  <th className="px-6  py-4 "></th>
                </tr>
              </thead>
              <tbody className=" text-xs">
                {filteredResources.map((item, index) => {
                  const status =
                    item.status === "Available"
                      ? "bg-customGreen/20 text-customGreen"
                      : item.status === "Allocated"
                      ? "bg-customRed/20 text-customRed"
                      : "bg-primary/20 text-primary";

                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b
                    hover:bg-[#FAFBFC]/60 transition duration-200 ease-in-out
                  "
                    >
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableResourcesDetails(item)}
                      >
                        {item.id}
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableResourcesDetails(item)}
                      >
                        {item.number}
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableResourcesDetails(item)}
                      >
                        {item.resources}
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableResourcesDetails(item)}
                      >
                        {item.type}
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap   cursor-pointer "
                        onClick={() => tableResourcesDetails(item)}
                      >
                        <div className={`py-1 px-3 ${status}  w-fit rounded-full text-xs `}>{item.status}</div>
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableResourcesDetails(item)}
                      >
                        {item.dateOfApplication}
                      </td>
                      <td className="  whitespace-nowrap">
                        <div className=" px-4  space-x-2  flexCenter h-full ">
                          <div className="hover:bg-slate-200 p-2 hover:text-black hover:rounded cursor-pointer ">
                            <FaPencil className="  " />
                          </div>

                          <div className="hover:bg-slate-200 p-2 hover:text-black hover:rounded cursor-pointer ">
                            <FaSave className="  " />
                          </div>

                          <div className="hover:bg-customRed/30 p-2 hover:text-black hover:rounded cursor-pointer ">
                            <FaTrashAlt className="  " />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* logistics */}
        <div className="flexBetween mb-8 mt-20 ">
          <div className=" md:text-sm text-xs">Logistics/Allocation</div>
          <div className="flex space-x-2">
            <select className="text-[#8E959C] border   rounded-md  flex items-center  leading-none py-1 px-2 text-xs md:py-2 md:px-8 md:text-sm">
              <option value="all">All</option>
              <option value="allocated">Allocated</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
            <Link
              to="/admin/people/add-resources"
              className="bg-primary text-white  border  p-2 rounded-lg flexBetween space-x-2 text-xs md:text-sm"
            >
              <FiPlus className="" />
              <span className="">Add Request</span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-2 md:gap-4 gap-2   ">
          {LogisticsMatrics.map((matric, index) => (
            <div key={index} className="border bg-white shadow-md md:p-4 p-2 rounded-xl">
              <div className="flexBetween">
                <div className="  ">
                  <div className="text-[#C8D2DC] text-[.6875rem] md:text-base">{matric.title}</div>
                  <div className="text-[#6E7479] md:text-2xl  font-bold">{matric.number}</div>
                </div>
                <div className="w-8 h-8 justify-center items-center flex bg-[#E6F2FF] rounded-lg ">
                  <img src={d} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <div className="flex md:flex-row flex-col gap-2 justify-between mt-8">
            {/* Buttons for Small Screens */}
            <div className="flex space-x-2 ">
              <div className="flex gap-2 text-[#8E959C] border md:w-[18.75rem] items-center w-[15.625rem]  rounded-md px-2  ">
                <FiSearch className=" " />
                <input
                  type="text"
                  placeholder="Search resources"
                  className=" placeholder:text-sm md:text-sm h-full text-xs w-full focus:outline-none "
                  onChange={handleSearchLogistics}
                />
              </div>
              <div className="flex text-gray-400 items-center gap-2 border rounded-md px-2 py-1 ">
                <span className="text-sm">Filter</span>
                <BiFilter />
              </div>
            </div>

            {/* Selected Button on the Right */}
            <div className=" relative inline-block text-left ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#8E959C] border py-1 px-2 rounded flex items-center text-xs leading-none"
              >
                <span className=" inline text-sm">({selectedCount}) Selected</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-[#D3DBE3] ml-2 text-xs  md:text-base" />
              </button>

              {isOpen && (
                <div className="absolute md:right-0 left-0 mt-1 w- rounded-md shadow-lg bg-white border text-[#8E959C] hover:text-red-500 cursor-pointer ">
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs   flex items-center">
                      <FaTrashAlt className=" mr-2" />
                      Delete
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* data table */}

          <div className="border overflow-auto rounded-lg shadow my-4 p-4 ">
            <table className="min-w-full table-auto border rounded-md text-[#8E959C]  ">
              <thead className="text-left bg-[#FAFBFC] text-xs">
                <tr>
                  <th className="px-6  py-4 ">ID</th>
                  <th className="px-6  py-4 ">Requester</th>
                  <th className="px-6  py-4 ">Department</th>
                  <th className="px-6  py-4 ">Number</th>
                  <th className="px-6  py-4 ">Status</th>
                  <th className="px-6  py-4 ">Allocation Start</th>
                  <th className="px-6  py-4 ">Allocation End</th>
                  <th className="px-6  py-4 "></th>
                </tr>
              </thead>
              <tbody className=" text-xs">
                {filteredLogistics.map((item) => {
                  const status =
                    item.status === "Allocated"
                      ? "bg-customGreen/20 text-customGreen"
                      : item.status === "Rejected"
                      ? "bg-customRed/20 text-customRed"
                      : item.status === "Pending"
                      ? "bg-gray-500/20 text-gray-500"
                      : "bg-primary/20 text-primary";

                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b 
                    hover:bg-[#FAFBFC]/60 transition duration-200 ease-in-out
                  "
                    >
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableLogisticsDetails(item)}
                      >
                        {item.id}
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableLogisticsDetails(item)}
                      >
                        {item.requester}
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableLogisticsDetails(item)}
                      >
                        {item.department}
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableLogisticsDetails(item)}
                      >
                        {item.number}
                      </td>
                      <td className="py-3 px-6 whitespace- cursor-pointer nowrap   onClick={() => tableLogisticsDetails(item)}  ">
                        <div className={`py-1 px-3 ${status}  w-fit rounded-full text-xs `}>{item.status}</div>
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableLogisticsDetails(item)}
                      >
                        {item.dateOfAllocation}
                      </td>
                      <td
                        className="py-3 px-6 whitespace-nowrap cursor-pointer "
                        onClick={() => tableLogisticsDetails(item)}
                      >
                        {item.endOfAllocation}
                      </td>
                      <td className="  whitespace-nowrap">
                        <div className=" px-4  space-x-2  flexCenter h-full ">
                          <div className="hover:bg-slate-200 p-2 hover:text-black hover:rounded cursor-pointer ">
                            <FaPencil className="  " />
                          </div>

                          <div className="hover:bg-slate-200 p-2 hover:text-black hover:rounded cursor-pointer ">
                            <FaSave className="  " />
                          </div>

                          <div className="hover:bg-customRed/30 p-2 hover:text-black hover:rounded cursor-pointer ">
                            <FaTrashAlt className="  " />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Details modal */}
      <div className={isModal ? " block" : "hidden"}>
        <ModalWrap
          isOpen={isModal}
          onClose={() => {
            setIsModal(!isModal);
          }}
          size="2xl"
          // title={isEnabled ? 'Disable Report Cards' : 'Enable Report Cards'}
        >
          {resourcesDetails && (
            <>
              <h1 className=" text-2xl mb-4 ">{resourcesDetails?.id}</h1>
              <div className="grid grid-cols-3 gap-2 text-xs ">
                <div className=" col-span-1 font-semibold ">Resource:</div>
                <div className=" col-span-2 font-light  ">{resourcesDetails?.resources}</div>
                <div className=" col-span-1 font-semibold ">Type:</div>
                <div className=" col-span-2 font-light  ">{resourcesDetails?.type}</div>
                <div className=" col-span-1 font-semibold ">Application Date:</div>
                <div className=" col-span-2 font-light  ">{resourcesDetails?.dateOfApplication}</div>
              </div>
              <div className="flex gap-2 text-xs mt-4 border-t pt-2 ">
                <div className=" ">Status:</div>
                <div
                  className={
                    resourcesDetails?.status === "Available"
                      ? ` bg-customGreen/20 text-customGreenp -1 rounded-full px-2  `
                      : resourcesDetails?.status === "Allocated"
                      ? "bg-customRed/20 text-customRed p-1 rounded-full px-2  "
                      : "bg-primary/20 text-primary p-1 rounded-full px-2 "
                  }
                >
                  {resourcesDetails?.status}
                </div>
              </div>{" "}
            </>
          )}
          {LogisticsDetails && (
            <>
              <h1 className=" text-2xl mb-4 ">{LogisticsDetails?.id}</h1>
              <div className="grid grid-cols-3 gap-2 text-xs ">
                <div className=" col-span-1 font-semibold ">Department:</div>
                <div className=" col-span-2 font-light  ">{LogisticsDetails?.department}</div>
                <div className=" col-span-1 font-semibold ">Note:</div>
                <div className=" col-span-2 font-light  ">-</div>
                <div className=" col-span-1 font-semibold ">Allocation Period:</div>
                <div className=" col-span-2 font-light  ">
                  {LogisticsDetails?.dateOfAllocation} to {LogisticsDetails?.endOfAllocation}
                </div>
                <div className=" col-span-1 font-semibold ">Day & Time:</div>
                <div className=" col-span-2 font-light  ">-</div>
              </div>
              <div className="flex gap-2 text-xs mt-4 border-t pt-2 ">
                <div className=" ">Status:</div>
                <div
                  className={
                    LogisticsDetails?.status === "Allocated"
                      ? "bg-customGreen/20 p-1 rounded-full px-2 text-customGreen"
                      : LogisticsDetails?.status === "Rejected"
                      ? "bg-customRed/20 p-1 rounded-full px-2 text-customRed"
                      : LogisticsDetails?.status === "Pending"
                      ? "bg-gray-500/20 p-1 rounded-full px-2 text-gray-500"
                      : "bg-primary/20 p-1 rounded-full px-2 text-primary"
                  }
                >
                  {LogisticsDetails?.status}
                </div>
              </div>
            </>
          )}
        </ModalWrap>
      </div>
    </div>
  );
}
