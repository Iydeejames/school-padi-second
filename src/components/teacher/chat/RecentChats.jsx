import  { useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import TrashIcon from "../../reusables/icons/TrashIcon";
import ChatBubbleIcon from "../../reusables/icons/ChatBubbleIcon";
import { MdMoreHoriz } from "react-icons/md";


export default function RecentChats() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const chats = Array(10).fill({
    title: "History of the American Revolution",
    date: "2 days ago",
  });

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const deleteAllChats = () => {
    // Implement the logic to delete all recent chats here
    console.log("Deleting all recent chats...");
    setIsPopupOpen(false); // Close the popup after deleting
  };

  return (
    <div className="relative p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center my-4 gap-3">
          <IoIosChatbubbles className="text-[#54585C] text-2xl" />
          <h2 className="text-xl font-semibold">Recent chats</h2>
        </div>
        <button
          className="rounded-xl p-2 hover:border-[#3D89DF] hover:border"
          onClick={togglePopup}
        >
          <MdMoreHoriz />
        </button>
      </div>

      {/* Popup for Deleting Recent Chats */}
      {isPopupOpen && (
        <div className="absolute right-0 top-16 w-52 bg-white shadow-lg rounded-xl p-4 z-10">
          <button onClick={deleteAllChats} className="flex items-center gap-x-8">
            <TrashIcon /> <span>Delete recents</span>
          </button>
          {/* <p className="text-sm text-gray-700">Are you sure you want to delete all recent chats?</p> */}
          {/* <div className="flex justify-end mt-4">
            <button
              className="text-xs text-gray-500 hover:text-gray-700 mr-4"
              onClick={togglePopup}
            >
              Cancel
            </button>
            <button
              className="text-xs text-red-500 hover:text-red-700"
              onClick={deleteAllChats}
            >
              Delete
            </button>
          </div> */}
        </div>
      )}

      <div className="grid xl:grid-cols-5 gap-4">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <ChatBubbleIcon />
            <h3 className="text-sm font-[500]">{chat.title}</h3>
            <div className="flex my-4 items-center justify-between">
              <p className="text-xs text-gray-500">{chat.date}</p>
              <button
                className="text-xs text-gray-400 hover:text-gray-600"
                aria-label="Delete chat"
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
