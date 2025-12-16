import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function SMSForm() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="mb-6">
        <h3 className="my-3 text-[#54585C]">Send To</h3>

        <div className="flex flex-wrap xl:gap-8 gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="sendAs"
              value="SchoolName"
              checked={selectedOption === "SchoolName"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-sm text-[#8E959C]">
              School Name &lt;dummymail@gmail.com&gt;
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="sendAs"
              value="YourName"
              checked={selectedOption === "YourName"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-sm text-[#8E959C]">
              Your Name (School Name) &lt;dummymail@gmail.com&gt;
            </span>
          </label>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Add SMTP to continue sending emails with your domain name
          </a>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="my-3 text-[#54585C]">Custom Numbers</h3>

        <input
          type="text"
          placeholder="Placeholder"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <p className="my-2 text-[#C8D2DC] text-xs">
          Please provide comma ( , ) for multiple contact numbers. <br />
          Ex :- 09005020020, 09784234560
        </p>
      </div>

      <div className="mb-6">
        <textarea
          placeholder="Text"
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex justify-between w-full gap-6">
        <button className="bg-blue-500 text-white w-full px-6 flex gap-2 items-center justify-center py-2 rounded-md">
          {" "}
          <FaCheckCircle /> <span>Send </span>{" "}
        </button>
        <button className="bg-gray-200 text-white w-full px-6 py-2 rounded-md flex gap-2 items-center justify-center">
          {" "}
          <MdCancel /> <span>Discard </span>{" "}
        </button>
      </div>
    </div>
  );
}
