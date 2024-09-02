// import  { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { FaWandMagicSparkles } from "react-icons/fa6";
import DiamondIcon from '../../reusables/icons/DiamondIcon';
import PropTypes from "prop-types"

export default function  ChatComponent  ({ chatInput,handleSendMessage, setChatInput }) {
  // const [inputValue, setInputValue] = useState('');

  const prompts = [
    "Write a birthday message to my teacher",
    "Improve the grammar used in this paragraph",
    "What is known as the rule of law?",
    "Suggest good health and fitness plans for me",
    "Suggest good vacation destinations",
  ];

  const icons = [
    <FaWandMagicSparkles key="sparkle" />,
    <CiEdit key="edit" />,
    <FaWandMagicSparkles key="sparkle" />,
    <DiamondIcon key="diamond" />,
    <DiamondIcon key="diamond" />,
  ];

  const handlePromptClick = (prompt) => {
    setChatInput(prompt);
    handleSendMessage();
  };

  return (
    <div className="p-4">
      {/* Prompt Cards */}
      <div className="flex flex-wrap overflow-x-auto justify-center xl:justify-start gap-4 mb-4">
        {prompts.map((prompt, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 justify-start bg-[#014F9E] text-white rounded-lg p-4 shadow-sm w-64 h-40 cursor-pointer"
            onClick={() => handlePromptClick(prompt)}
          >
            <div className="self-start">

              {icons[index % icons.length]}
            </div>
            <div className="flex items-center ">
              <p className="text-sm ">{prompt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="How can SchoolPadi AI assist you today?"
          className="flex-grow border border-gray-300 rounded-lg p-3"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button disabled={chatInput===""} className={`${chatInput !== "" ? "bg-[#014F9E] text-white" :  "bg-gray-200 text-gray-500"}  rounded-lg px-6 py-3 flex items-center`}>
          Get response →
        </button>
      </div>
    </div>
  );
}
ChatComponent.propTypes ={
  chatInput: PropTypes.string.isRequired,
  handleSendMessage: PropTypes.func.isRequired,
  setChatInput: PropTypes.func.isRequired
}