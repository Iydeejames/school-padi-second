import { FaCalendarAlt,  FaBars, FaTimes } from "react-icons/fa";
import SearchComponent from "../../components/reusables/filters/SearchComponent";
import { IoChatbubbles } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { MdPerson } from "react-icons/md";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { getTitle } from "../../utils/titleUtils";
import { useState } from "react";
import UserProfileMenu from "./ProfileMenu";

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeProfileMenu = () => {
    setMenuOpen(false);
  };
  const location = useLocation();

  return (
    <div className="relative w-full bg-[#014F9E] text-white md:h-[40vh] xl:h-[50vh] 2xl:h-[47vh] py-8 px-[20px] md:px-[80px]">
      <div className="flex items-center justify-between">
        <img src="/schoolpadi.svg" alt="school padi image" />

        {/* Hide SearchComponent on mobile, show on larger screens */}
        <div className="hidden md:block">
          <SearchComponent />
        </div>

        <div className="flex items-center gap-x-5 text-xl text-[#01356B]">
          {/* Hide icons on mobile, show on larger screens */}
          <div className="hidden md:flex items-center gap-x-5">
            <div className="flex items-center p-2 bg-white rounded-full">
            <img src="/gpt_logo.svg" className="w-5 h-5 cursor-pointer" onClick={()=>navigate("/t/chat")}  />
            </div>
            <div className="flex items-center p-2 bg-white rounded-full">
              <IoChatbubbles onClick={()=>navigate("/t/aichat")} className="cursor-pointer" />
            </div>
            <div className="flex items-center p-2 bg-white rounded-full">
              <GrAnnounce />
            </div>
            <button onClick={toggleProfileMenu}  className="flex focus:outline-none items-center p-2 bg-white rounded-full">
              <MdPerson />
            </button>
          </div>
          <UserProfileMenu isOpen={menuOpen} onClose={closeProfileMenu} />

          {/* Hamburger icon for mobile view */}
          <div className="md:hidden">
            <FaBars className="text-white" onClick={toggleMenu} />
          </div>
        </div>
      </div>

      <div className="md:flex-row  flex flex-col gap-8 items-center my-10 justify-between">
        <h2 className="text-3xl">{getTitle(location.pathname)}</h2>

        <div className="flex items-center gap-x-2">
          <FaCalendarAlt />
          <p className="text-xl">14th July 2024</p>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <p className="text-xl">09:00 AM</p>
        </div>
      </div>

      {/* Show Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar isMobile={false} />
      </div>

      {/* Drawer for mobile view */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#01356B] text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between p-4">
          <h2 className="text-2xl">Menu</h2>
          <FaTimes className="text-white" onClick={toggleMenu} />
        </div>

        {/* Show Mobile Navbar */}
        <Navbar isMobile={true} toggleMenu={toggleMenu} />

        <div className="flex items-center justify-center gap-x-5 mt-[60px]">
            <div className="flex items-center p-2 bg-white text-black rounded-full">
            <img src="/gpt_logo.svg" className="w-5 h-5 cursor-pointer" onClick={()=>navigate("/t/chat")}  />
            </div>
            <div className="flex items-center p-2 bg-white text-black rounded-full">
            <IoChatbubbles onClick={()=>navigate("/t/aichat")} className="cursor-pointer" />
            </div>
            <div className="flex items-center p-2 bg-white text-black rounded-full">
              <GrAnnounce />
            </div>
            <div className="flex items-center p-2 bg-white text-black rounded-full">
              <MdPerson />
            </div>
          </div>
      </div>

      {/* Overlay for when the drawer is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
