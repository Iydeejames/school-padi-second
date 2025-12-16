import { useState, useEffect } from "react";
import { TabButton } from "../../../components/reusables/filters";
import EmailForm from "../../../components/teacher/schedule/EmailForm";
import { BiArrowBack } from "react-icons/bi";
import SMSForm from "../../../components/teacher/schedule/SMSForm";
import { Link, useLocation, useNavigate } from "react-router-dom";

const tabs = ["Create Emails", "Create SMS"];

export default function CreateMessage() {
  const location = useLocation();
  const history = useNavigate();
  const query = new URLSearchParams(location.search);
  const initialTab = query.get("tab") || "Create Emails";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    history(`?tab=${tab}`);
  };

  return (
    <section>
      <div className="flex -mt-6 justify-between text-white items-center w-full">
        <Link to={"/t/schedule-comms/"} className="px-4 py-2 rounded-lg flex items-center gap-2">
          <BiArrowBack />
          <span>Back</span>
        </Link>
        <h2 className="text-2xl ">{activeTab}</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-lg mt-5">
        <TabButton
          isBorder
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>

      {activeTab === "Create Emails" && <EmailForm />}
      {activeTab === "Create SMS" && <SMSForm />}
    </section>
  );
}
