import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';


function FileUpload() {
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('No file chosen');
    }
  };

  return (
    <div className="flex items-center gap-4 mt-4">
      <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center gap-4">
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-sm text-gray-500 flex items-center gap-2"
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16V8a4 4 0 018 0v8m-4 4v-4m0 0H7m4 0h4"
            ></path>
          </svg>
          <span>Tap to Upload</span>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md"
          onClick={() => document.getElementById('file-upload').click()}
        >
          Upload
        </button>
      </div>
      <div className="text-gray-500 text-sm">{fileName}</div>
      <button className="bg-gray-200 text-gray-500 text-sm px-2 py-2 rounded-full flex items-center justify-center">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default function EmailForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [receivers, setReceivers] = useState({
    Admins: false,
    Teachers: false,
    Students: false,
    Parents: false,
    Alumni: false,
    Guest: false,
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleReceiverChange = (e) => {
    setReceivers({
      ...receivers,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="mb-6">
        <h3 className='my-3 text-[#54585C]'>Send As</h3>
        <div className="flex xl:flex-row flex-wrap xl:gap-8 gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="sendAs"
              value="SchoolName"
              checked={selectedOption === 'SchoolName'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-sm text-[#8E959C]">School Name &lt;dummymail@gmail.com&gt;</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="sendAs"
              value="YourName"
              checked={selectedOption === 'YourName'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-sm text-[#8E959C]">Your Name (School Name) &lt;dummymail@gmail.com&gt;</span>
          </label>
          <a href="#" className="text-sm text-blue-500 hover:underline">Add SMTP to continue sending emails with your domain name</a>
        </div>
      </div>

      <div className="mb-6">
      <h3 className='my-3 text-[#54585C]'>Receivers</h3>

        <div className="flex  gap-7 flex-wrap">
          {['Admins', 'Teachers', 'Students', 'Parents', 'Alumni', 'Guest'].map((role) => (
            <label key={role} className="flex items-center">
              <input
                type="checkbox"
                name={role}
                checked={receivers[role]}
                onChange={handleReceiverChange}
                className="mr-2"
              />
              <span className="text-sm text-[#8E959C]">{role}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Placeholder"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className='text-[#54585C]'>Subject</label>
        <input
          type="text"
          name='subject'
          placeholder="Placeholder"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-6 ">
        <label htmlFor="" className='text-[#54585C] '>Email Template</label>
        <select  className="w-full text-[#D3DBE3] px-4 py-2 border border-gray-300 rounded-md">
          <option value="default">Default</option>
        </select>
      </div>

      <div className="mb-6">
        <textarea
          placeholder="Text"
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <FileUpload />

      <div className="flex justify-between my-4 w-full gap-6">
        <button className="bg-blue-500 text-white w-full px-6 flex gap-2 items-center justify-center py-2 rounded-md">  <FaCheckCircle /> <span>Send </span> </button>
        <button className="bg-gray-200 text-white w-full px-6 py-2 rounded-md flex gap-2 items-center justify-center"> <MdCancel /> <span>Discard </span> </button>
      </div>
    </div>
  );
}
