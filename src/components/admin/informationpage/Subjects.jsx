import  { useState } from 'react'; // Ensure useState is imported
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdEdit, MdAttachFile, MdCardMembership } from 'react-icons/md';
import { FaUserEdit, FaEnvelope, FaSms, FaWhatsapp, FaLock, FaUnlock, FaTrash } from 'react-icons/fa'; // Updated icons for Block and Unblock
import SubjectTab from '../../teacher/administration/SubjectTab'; // Ensure correct path

const Subjects = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBackClick = () => {
    navigate(-1); // This will navigate back to the previous route
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative">
        <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
          <div className="text-white text-sm leading-none sm:text-xl -mt-2 mb-8 flex gap-2">
            <div onClick={handleBackClick} className="flex items-center cursor-pointer">
              <AiOutlineArrowLeft />
              <p className="text-sm">Back</p>
            </div>
          </div>
          <div className="relative">
            <div
              className="bg-white p-2 rounded mt-[-2rem] cursor-pointer"
              onClick={toggleDropdown}
            >
              <FiMoreHorizontal className="text-gray-500 text-lg" />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded shadow-lg w-64 z-50"> 
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <MdEdit className="text-[#8E959C] mr-2" />
                  <p>Edit Profile</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <MdAttachFile className="text-[#8E959C] mr-2" />
                  <p>Manage Attachments</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <MdCardMembership className="text-[#8E959C] mr-2" />
                  <p>Manage ID Card</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <FaUserEdit className="text-[#8E959C] mr-2" />
                  <p>Edit Login Details</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <FaEnvelope className="text-[#8E959C] mr-2" />
                  <p>Invite to Login (Email)</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <FaSms className="text-[#8E959C] mr-2" />
                  <p>Invite to Login (SMS)</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <FaWhatsapp className="text-[#8E959C] mr-2" />
                  <p>Invite to Login (WhatsApp)</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <FaLock className="text-[#8E959C] mr-2" />
                  <p>Block</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <FaUnlock className="text-[#8E959C] mr-2" />
                  <p>Unblock</p>
                </div>
                <div className="p-2 flex items-center text-[#8E959C] hover:bg-gray-100 cursor-pointer">
                  <FaTrash className="text-[#8E959C] mr-2" />
                  <p>Delete Profile</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Overlapping White Box */}
        <div className="relative -top-4 px-6">
          <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4 mb-4">
            <div className="grid grid-cols-4 gap-2">
              <a href="/TeachersProfile" className="flex flex-col sm:flex-row items-center justify-center relative">
                <span className="text-blue-600 text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Profile</span>
              </a>

              <a href="/Subjects" className="flex flex-col sm:flex-row items-center justify-center relative">
               <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Subjects</span>
               <div className="absolute left-1/2 transform -translate-x-1/2 w-10/12 border-b-2 border-blue-600 mt-[4rem] sm:mt-[4.3rem]"></div>
               </a>

              <a href="/ScheduleScreen" className="flex flex-col sm:flex-row items-center justify-center">
                <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Schedule</span>
              </a>
              <a href="/AttendanceScreen" className="flex flex-col sm:flex-row items-center justify-center">
                <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Attendance</span>
              </a>
            </div>
          </div>

          <SubjectTab />
        </div>
      </div>
    </>
  );
};

export default Subjects;
