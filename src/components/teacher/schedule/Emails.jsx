import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import ReceivedTab from "./emails/ReceivedTab";
import SentTab from "./emails/SentTab";

export default function Emails() {
  const [tabItem, setTabItem] = useState("Received");

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
        <div className="flex items-center gap-4 text-left ml-auto">
          <button
            onClick={() => setTabItem("Received")}
            className="text-[#3599FF] border bg-[#E6F2FF] py-1 px-2 rounded flex items-center text-xs leading-none sm:py-1 sm:px-2 sm:text-xs md:py-2 md:px-4 md:text-sm"
          >
            Received
          </button>
          <button
            onClick={() => setTabItem("Sent")}
            className="text-[#8E959C] border py-1 px-2 rounded flex items-center text-xs leading-none sm:py-1 sm:px-2 sm:text-xs md:py-2 md:px-4 md:text-sm"
          >
            Sent{" "}
          </button>
        </div>
      </div>
      {/* {
    tabItem  === "Sent" && <SentTab />
} */}
      {tabItem === "Received" ? <ReceivedTab /> : <SentTab />}
    </div>
  );
}
