import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SchoolLogo from "../../assets/schoolpadi-img/school-logo.png";
import { faBell, faUser, faCalendar, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { IoChatbubbles } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // Import useLocation

// Function to format date with ordinal suffix and time
const formatDateTime = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Add ordinal suffix to day
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");

  // Format hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // Converts to 12-hour format

  return `${dayWithSuffix} ${month}, ${year} ${hours}:${minutes}${ampm}`;
};

const Navbar = () => {
  // current date and time formatted
  const currentDateTime = formatDateTime(new Date());

  // State for controlling hamburger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation(); // Get current location

  const links = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Information System", href: "/infomation-system" },
    { name: "Schedules/Comms", href: "/schedules" },
    { name: "Graduation/Alumni", href: "/graduation" },
    { name: "Finance/Accounting", href: "/finance" },
    { name: "People/Productivity", href: "/admin/people" },
    { name: "Marketing/Admissions", href: "/marketing" },
    { name: "Administrations", href: "/administrations" },
  ];
 

  return (
    <>
      <nav className="bg-[#014F9E] p-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap relative ">
          {/* Left section: Logo and welcome message */}
          <div className="flex flex-col items-start">
            <img src={SchoolLogo} alt="School Logo" className="h-6 mb-2" />
          </div>

          {/* Hamburger icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>

          {/* Center section: Search bar (hidden on small screens) */}
          <div
            className={`w-full md:w-auto absolute -translate-x-[50%] left-[50%]  ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="flex-grow mb-4 md:mb-0 flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-[400px]  px-2 py-1 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right section: Icons (hidden on small screens) */}
          <div
            className={`flex flex-col items-end space-y-2 ${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-4`}
          >
            {/* icons */}
            <div className="flex space-x-6">
              {/* Plus Icon */}
              <div className="flex items-center bg-white rounded-full cursor-pointer text-[#014F9E] text-xl p-2 px-3">
                <FaPlusCircle />
              </div>

              {/* Notification Icon */}
              <div className="bg-[#FFFFFF] rounded-full cursor-pointer p-2 px-3">
                <FontAwesomeIcon icon={faBell} className="text-[#014F9E] text-xl" title="Notifications" />
              </div>

              {/* Chat Icon */}
              <div className="flex items-center bg-white rounded-full cursor-pointer text-[#014F9E] text-xl p-2 px-3">
                <IoChatbubbles />
              </div>

              {/* Sound Icon */}
              <div className="flex items-center bg-white rounded-full cursor-pointer text-[#014F9E] text-xl p-2 px-3">
                <GrAnnounce />
              </div>

              {/* User Icon */}
              <div className="bg-[#FFFFFF] rounded-full cursor-pointer p-2 px-3 flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-[#014F9E] text-xl" title="Account" />
              </div>
            </div>
          </div>
        </div>
        <div className="flexBetween mt-9 ">
          <div className="flex">
            <span className="text-white  text-3xl">
              {links.map((link) => (
                <div key={link.href}>{location.pathname.includes(link.href) && link.name}</div>
              ))}{" "}
            </span>
          </div>

          {/* Calendar Icon with Date and Time (placed beneath the other icons) */}
          <div className="flex items-center space-x-2 text-white pt-4">
            <FontAwesomeIcon
              icon={faCalendar}
              className="bg-[#FFFFFF] text-[#014F9E] rounded-full p-1.5 text-sm"
              title="Calendar"
            />
            <span className="hidden md:block text-sm">{currentDateTime}</span>
          </div>
        </div>

        {/* Dropdown menu for small screens */}
        <div className={`fixed inset-0 bg-[#014F9E] text-white p-4 ${isMenuOpen ? "block" : "hidden"} md:hidden z-50`}>
          <div className="flex justify-between items-center  mb-4">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>

          {/* Search bar in dropdown */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Icons in dropdown */}
          <div className="flex space-x-6  mb-4 justify-center">
            {/* Plus Icon */}
            <div className="flex items-center  text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
              <FaPlusCircle />
            </div>

            {/* Notification Icon */}
            <div className="bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
              <FontAwesomeIcon icon={faBell} className="text-[#014F9E] text-sm" title="Notifications" />
            </div>

            <div className="flex items-center  text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
              <IoChatbubbles />
            </div>

            {/* Sound Icon */}
            <div className="flex items-center  text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
              <GrAnnounce />
            </div>

            {/* User Icon */}
            <div className="bg-[#FFFFFF] rounded-full p-1.5 px-2.5 flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-[#014F9E] text-sm" title="Account" />
            </div>
          </div>

          {/* Links in dropdown, centralized */}
          <ul className="space-y-4 text-left justify-center">
            {links.map((link) => (
              <li
                key={link.href}
                className={`font-semibold cursor-pointer ${
                  location.pathname === link.href ? "text-[#FFFFFF]  py-1 rounded" : "hover:text-black"
                }`}
              >
                <a href={`${link.href}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* New section: Text links */}
        <div className="mt-6 mb-4 hidden md:block overflow-x-hidden">
          <ul className="grid md:grid-cols-4 lg:flex lg:flex-wrap justify-between items-center text-[#FFFFFF] md:text-sm lg:text-base md:space-x-0 space-y-2 md:space-y-0">
            {links.map((link) => (
              <li
                key={link.href}
                className={`flex flex-col items-center whitespace-nowrap w-1/2 md:w-auto px-2 cursor-pointer`}
              >
                <a
                  href={`${link.href}`}
                  className={`flex items-center p-2 text-sm  ${
                    location.pathname.includes(link.href) ? "text-[#014F9E] bg-white rounded-xl " : "hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
                <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full"></span>
              </li>
            ))}
          </ul>
          {/* <div className="w-full h-0.5 bg-[#FFFFFF] mt-4 mb-12"></div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
