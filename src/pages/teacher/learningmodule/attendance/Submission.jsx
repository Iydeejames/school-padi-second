import { useState } from "react";
import Dropdown from "../../../../components/teacher/studentdetail/attendance/DropDown";
import { SelectComponent } from "../../../../components/reusables/filters";

const Submission = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedView, setSelectedView] = useState("viewAll");

  const sections = [
    { value: "sectionA", label: "Section A" },
    { value: "sectionB", label: "Section B" },
    { value: "sectionC", label: "Section C" },
    { value: "sectionD", label: "Section D" },
    { value: "sectionF", label: "Section F" },
  ];

  const classes = [
    { value: "nursery1", label: "Nursery 1", group: "Kindergarten" },
    { value: "nursery2", label: "Nursery 2", group: "Kindergarten" },
    { value: "class1", label: "Class 1", group: "Primary" },
    { value: "class2", label: "Class 2", group: "Primary" },
    { value: "class3", label: "Class 3", group: "Primary" },
    { value: "class4", label: "Class 4", group: "Primary" },
    { value: "class5", label: "Class 5", group: "Primary" },
  ];

  const viewOptions = [
    { value: "viewAll", label: "View All" },
    { value: "viewUnmarked", label: "View Unmarked Only" },
  ];

  const data = [
    {
      date: "01-07-2024",
      section: "Section A",
      class: "Class 3",
      subject: "Mathematics",
      isMarked: true,
    },
    {
      date: "02-07-2024",
      section: "Section B",
      class: "Class 1",
      subject: "Science",
      isMarked: false,
    },
    // More sample data...
  ];

  // Filter data based on selected options
  const filteredData = data.filter((item) => {
    return (
      (selectedSection ? item.section === selectedSection : true) &&
      (selectedClass ? item.class === selectedClass : true) &&
      (selectedView === "viewUnmarked" ? !item.isMarked : true)
    );
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="p-4">Academic</h2>
      <div className="flex xl:flex-row flex-col justify-between gap-4 mb-6 items-center">
        <div className="w-full">
          <p>Date</p>
          <SelectComponent />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {/* Section Dropdown */}
          <Dropdown
            label="Section"
            placeholder="Select section"
            searchPlaceholder="Search section..."
            options={sections}
            onSelect={setSelectedSection}
          />

          {/* Class Dropdown */}
          <Dropdown
            label="Class"
            placeholder="Select class"
            searchPlaceholder="Search class..."
            options={classes}
            onSelect={setSelectedClass}
          />

          {/* View Dropdown */}
          <Dropdown
            label="View"
            placeholder="Select view"
            searchPlaceholder="Search view..."
            options={viewOptions}
            onSelect={setSelectedView}
          />
        </div>
      </div>

      {/* Table to Display Filtered Data */}
      <div className="overflow-auto">
        <table className="min-w-full border divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subjects
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Marked
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item, idx) => (
              <tr key={idx}>
                <td className="px-4 py-2 whitespace-nowrap">{item.date}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.section}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.class}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.subject}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-500"
                    checked={item.isMarked}
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submission;
