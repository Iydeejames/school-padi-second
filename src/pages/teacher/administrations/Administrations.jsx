import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileTab from "../../../components/teacher/administration/ProfileTab";
import AttendanceTab from "../../../components/teacher/administration/AttendanceTab";
import { TabButton } from "../../../components/reusables/filters";
import { FaArrowLeftLong  } from "react-icons/fa6";
import { LuMoreHorizontal } from "react-icons/lu";
import EditIcon from "../../../components/reusables/icons/EditIcon";
import ScheduleTab from "../../../components/teacher/administration/ScheduleTab";
import SubjectTab from "../../../components/teacher/administration/SubjectTab";

const tabs = ["Profile", "Subjects", "Class Schedule", "Attendance"];

export default function Administration() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const initialTab = query.get("tab") || "Profile";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`?tab=${tab}`);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <section>
      <div className="flex justify-between -mt-5 px-2">
        <Link to="#" className="flex text-lg text-white  items-center gap-4">
          <FaArrowLeftLong className="text-2xl"/>
          <h2 >Back</h2>
        </Link>
        <button onClick={togglePopup} className="bg-white rounded-md text-2xl text-[#DAE1E8] h-10 w-10 flex items-center justify-center ">
          <LuMoreHorizontal />
        </button>
        {showPopup && (
        <div className="absolute top-12 right-10 bg-white w-64 shadow-md rounded-md p-2">
          <div className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 rounded-md">
            <EditIcon />
            <span>Edit Profile</span>
          </div>
        </div>
      )}
      </div>
      <div className="bg-white rounded-2xl shadow-lg mt-3">
        <TabButton
          isBorder
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>

      <div className="mx-auto">
        <div className="p-4 w-full">
          {activeTab === "Profile" && <ProfileTab />}
          {activeTab === "Subjects" && <SubjectTab />}
          {activeTab === "Class Schedule" && <ScheduleTab />}
          {activeTab === "Attendance" && <AttendanceTab />}
        </div>
      </div>
    </section>
  );
}
