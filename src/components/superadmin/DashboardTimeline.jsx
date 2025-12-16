import { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { PiShootingStarFill } from 'react-icons/pi';

export default function DashboardTimeline() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <ol className="relative border-s border-gray-200 w-full dark:border-gray-700">
      {[1, 2, 3].map((item, index) => (
        <li
          key={index}
          className={`mb-10 ms-10 ${activeItem === index ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => handleItemClick(index)}
        >
          <span
            className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 ${
              activeItem === index ? 'bg-[#027FFF] text-white dark:bg-blue-900' : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            <FaRegBell />
          </span>
          <div className={`p-2 rounded-2xl ${activeItem === index ? 'bg-[#E6F2FF]' : 'bg-gray-100 dark:bg-gray-800'}`}>
            <div className="flex items-center gap-x-4">
              <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                08:00
              </time>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: activeItem === index ? '#027FFF' : 'gray' }}></div>
            </div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-500 dark:text-white">
              Subscription Renewal
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              The High School.
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <PiShootingStarFill className={`text-${activeItem === index ? '[#027FFF]' : 'gray-500'}`} />
            <p className={activeItem === index ? 'text-[#027FFF]' : 'text-gray-500'}>3 Schools includes</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
