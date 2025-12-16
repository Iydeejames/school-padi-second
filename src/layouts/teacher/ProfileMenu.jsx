import  { useCallback, useEffect, useRef } from 'react';
import { FaUserCircle, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const UserProfileMenu = ({ isOpen, onClose }) => {
    const menuRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    }, [onClose]);
  
    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [handleClickOutside, isOpen]);

  return (
    <div className="relative">
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 top-5 w-[350px] bg-white rounded-lg shadow-lg overflow-hidden z-20"
        >
          <div className="p-4">
            <img
              src="/user-avatar.jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full mb-2"
            />
            <p className="text-gray-900 font-semibold">Admin Name</p>
            <p className="text-gray-500 text-sm">Position - ID Number</p>
          </div>
          <div className="border-t border-gray-200">
            <a href="/personal-settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <FaUserCircle className="inline-block mr-2" /> Personal Settings
            </a>
            <div className="border-t border-gray-200"></div>
            <div className="p-4">
              <p className="text-gray-900 font-semibold">Product Support</p>
            </div>
            <a href="/knowledge-base" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <FaQuestionCircle className="inline-block mr-2" /> Knowledge Base
            </a>
            <a href="/contact-support" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <FaQuestionCircle className="inline-block mr-2" /> Contact Support
            </a>
          </div>
          <div className="border-t border-gray-200">
            <a href="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100">
              <FaSignOutAlt className="inline-block mr-2" /> Log out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

UserProfileMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  
}

export default UserProfileMenu;
