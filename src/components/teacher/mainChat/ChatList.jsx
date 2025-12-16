import { useState } from 'react';
import { IoIosChatbubbles } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdGroup } from "react-icons/md";
import PropTypes from 'prop-types';

export default function  ChatList  ({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('All Chats');

  const categories = [
    { name: 'All Chats', icon: <IoIosChatbubbles className="mr-2" /> },
    { name: 'Individual', icon: <IoPersonSharp className="mr-2" /> },
    { name: 'Groups', icon: <MdGroup className="mr-2" /> }
  ];

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    onSelectCategory(categoryName);
  };

  return (
    <div className="xl:w-1/4 w-full  border-r ">
      <ul className='mt-6'>
        {categories.map(category => (
          <li
            key={category.name}
            className={`flex gap-3 items-center py-4 px-4 cursor-pointer  
              ${selectedCategory === category.name ? 'border-b-2 border-blue-500 text-blue-500' : 'hover:bg-gray-200'}`}
            onClick={() => handleCategorySelect(category.name)}
          >
            {category.icon}
            {category.name}
            <span className={` rounded-full text-xs px-1  ${selectedCategory === category.name ? 'bg-[#3599FF] text-white' : 'bg-[#EEF1F4]'}`}>0</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ChatList.propTypes = {
    onSelectCategory: PropTypes.func.isRequired,
};
