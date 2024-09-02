import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TabButton } from "../../components/reusables/filters";
import ProfileTab from "../../components/teacher/studentdetail/ProfileTab";
import EnrollmentTab from "../../components/teacher/studentdetail/EnrollmentTab";
import AttendanceTab from "../../components/teacher/studentdetail/AttendanceTab";
import ReportCardTab from "../../components/teacher/studentdetail/ReportCardTab";

const tabs = ["Profile", "Enrollment", "Attendance", "Report Cards"];

const StudentDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const initialTab = query.get("tab") || "Profile";

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`?tab=${tab}`);
  };

  return (
    <section>
      <div className="bg-white rounded-2xl shadow-lg mt-5">
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
          {activeTab === "Enrollment" && <EnrollmentTab />}
          {activeTab === "Attendance" && <AttendanceTab />}
          {activeTab === "Report Cards" && <ReportCardTab />}
        </div>
      </div>
    </section>
  );
};

export default StudentDetail;
