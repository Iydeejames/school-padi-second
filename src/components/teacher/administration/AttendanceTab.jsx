import CustomCalendar from "../studentdetail/attendance/Calendar";
import Dropdown from "../studentdetail/attendance/DropDown";
import SectionDropdown from "../studentdetail/attendance/SectionDropdown";

const academicSessions = [
  { value: "2024", label: "SY 2024" },
  { value: "2023", label: "SY 2023" },
  { value: "2022", label: "SY 2022" },
  { value: "2021", label: "SY 2021" },
  { value: "2020", label: "SY 2020" },
];
const attendance = [
  { value: "2024", label: "SY 2024" },
  { value: "2023", label: "SY 2023" },
  { value: "2022", label: "SY 2022" },
  { value: "2021", label: "SY 2021" },
  { value: "2020", label: "SY 2020" },
];
const subject = [
  { value: "2024", label: "SY 2024" },
  { value: "2023", label: "SY 2023" },
  { value: "2022", label: "SY 2022" },
  { value: "2021", label: "SY 2021" },
  { value: "2020", label: "SY 2020" },
];
export default function AttendanceTab() {
  const handleSessionSelect = (selectedValue) => {
    console.log("Selected session:", selectedValue);
  };

  return (
    <div className="h-screen border rounded-xl p-4 w-full">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-2 items-center ">
        <Dropdown
          options={academicSessions}
          placeholder="Select Academic Session"
          searchPlaceholder="Search "
          onSelect={handleSessionSelect}
        />
        <Dropdown
          options={attendance}
          placeholder="Select Attendance"
          searchPlaceholder="Search "
          onSelect={handleSessionSelect}
        />
        <SectionDropdown onSelect={handleSessionSelect} />{" "}
        {/* Use the new SectionDropdown component */}
        <Dropdown
          options={subject}
          placeholder="Select subject"
          searchPlaceholder="Search "
          onSelect={handleSessionSelect}
        />
      </div>
      <CustomCalendar />
    </div>
  );
}
