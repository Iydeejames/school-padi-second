import { useState } from "react";
import { TabButton } from "../../../components/reusables/filters";
import Emails from "../../../components/teacher/schedule/Emails";
import TeacherSmsDashboard from "../../../components/teacher/schedule/TeacherSmsDashboard";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Notices from "../../../components/teacher/schedule/Notices";
const tabs = ["Notices", "Emails", "SMS", "Whatsapp", "Events"];

export default function ScheduleComms() {
  const [activeTab, setActiveTab] = useState("Notices");

  return (
    <section>
      <div className="flex -mt-6 px-4  justify-between text-white items-center w-full">
        <h2 className="text-2xl ">{activeTab}</h2>
    <Link to={"/t/schedule-comms/create-message"} className="bg-[#027FFF] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-400"> <FaPlus  />  <span> Compose</span> </Link>
      </div>
      <div className="bg-white rounded-2xl shadow-lg mt-5">
        <TabButton
          isBorder
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
      </div>

      {activeTab === "Notices" && <Notices />}
      {activeTab === "Emails" && <Emails />}
      {activeTab === "SMS" && <TeacherSmsDashboard />}
    </section>
  );
}
