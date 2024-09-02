import { useState } from "react";
import useModal from "../../../../hooks/useModal";
import ReportCardModal from "../../../modals/ReportCardModal";
import Dropdown from "./DropDown";
import GradeBookComponent from "./reportcards/GradeBookComponent";
import ReportCardComponent from "./reportcards/ReportCardComponent";




export default function GradeBook  ()  {
  const { isOpen, openModal, closeModal } = useModal();
  const [toggleStatus, setToggleStatus] = useState("");
  const [expandedRow, setExpandedRow] = useState(null); // Manage which row is expanded
  const [selectedView, setSelectedView] = useState("gradebook"); // Manage which component to show

  const data = [
    {
      subject: "Mathematics",
      hw: "18/20",
      test: "09/10",
      exam: "50/70",
      overall: "A",
      details: "Detailed information about the grades and feedback.",
    },
    // Add more subjects if necessary
  ];

  const academicSessions = [
    { value: "2024", label: "SY 2024" },
    { value: "2023", label: "SY 2023" },
    { value: "2022", label: "SY 2022" },
    { value: "2021", label: "SY 2021" },
    { value: "2020", label: "SY 2020" },
  ];

  const handleSessionSelect = (selectedValue) => {
    console.log("Selected session:", selectedValue);
  };

  const handleToggleStatus = (selectedValue) => {
    console.log("Selected session:", selectedValue);
    setToggleStatus(selectedValue);
    openModal();
  };

  const handleExpandClick = () => {
    setExpandedRow(!expandedRow ); // Toggle the expanded row
  };

  return (
    <section className="p-8 bg-white w-full rounded-2xl shadow-lg mt-5">
      <div className="flex items-center justify-between mb-4">
        <div className="grid grid-cols-3 gap-8">
          <Dropdown
            options={academicSessions}
            placeholder="Select Academic Session"
            searchPlaceholder="Search"
            onSelect={handleSessionSelect}
          />
          <label className="flex text-[#54585C] font-[400] text-sm p-4 border rounded-xl border-[#DAE1E8] items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="view"
              className="form-radio"
              checked={selectedView === "gradebook"}
              onChange={() => setSelectedView("gradebook")}
            />
            <span>Grade Books</span>
          </label>
          <label className="flex  text-[#54585C] font-[400] text-sm  border rounded-xl p-4  items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="view"
              className="form-radio"
              checked={selectedView === "reportcard"}
              onChange={() => setSelectedView("reportcard")}
            />
            <span>Report Cards</span>
          </label>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => handleToggleStatus("enabled")}
            className="py-2 px-4 bg-[#E6F2FF] text-[#3599FF] rounded-md"
          >
            Enable
          </button>
          <button
            onClick={() => handleToggleStatus("disabled")}
            className="py-2 px-4 bg-white border border-[#DAE1E8] text-[#8E959C] rounded-md"
          >
            Disable
          </button>
        </div>
      </div>

      <div className="text-xl font-[500] mb-4">
        {selectedView === "gradebook" ? "Grade Books" : "Report Cards"}
      </div>

      {selectedView === "gradebook" ? (
        <GradeBookComponent
          data={data}
          handleExpandClick={handleExpandClick}
          expandedRow={expandedRow}
        />
      ) : (
        <ReportCardComponent />
      )}

      {isOpen && (
        <ReportCardModal
          toggleStatus={toggleStatus}
          isOpen={isOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
}


