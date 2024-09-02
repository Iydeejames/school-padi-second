import { useState } from 'react';
import Dropdown from '../studentdetail/attendance/DropDown';
// import Dropdown from './Dropdown'; // Import your custom Dropdown component
import PropTypes from "prop-types"
const SubjectTab = () => {
  const academicSessions = [
    { label: 'SY 2024', value: 'SY 2024' },
    { label: 'SY 2023', value: 'SY 2023' },
    { label: 'SY 2022', value: 'SY 2022' },
    { label: 'SY 2021', value: 'SY 2021' },
    { label: 'SY 2020', value: 'SY 2020' },
  ];

  const [selectedSession, setSelectedSession] = useState(null);

  const handleSessionSelect = (selectedOption) => {
    setSelectedSession(selectedOption);
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Dropdown for selecting academic session */}
      <div className="mb-6">
        <Dropdown
          options={academicSessions} 
          placeholder="Select Academic Session"
          searchPlaceholder="Search"
          onSelect={handleSessionSelect}
        />
      </div>

      {/* Conditional rendering based on session selection */}
      {selectedSession && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">PRIMARY</h2>
            <ClassSection
              title="Class 1 - SECTION A"
              subjects={[
                { name: 'English', students: 32 },
              ]}
            />
            <ClassSection
              title="Class 2 - SECTION A"
              subjects={[
                { name: 'Biology', students: 32 },
                { name: 'Mathematics', students: 32 },
              ]}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">SECONDARY</h2>
            <ClassSection
              title="Class 3 - SECTION B"
              subjects={[
                { name: 'Biology', students: 32 },
                { name: 'Chemistry', students: 32 },
                { name: 'Lab', students: 32 },
                { name: 'Mathematics', students: 32 },
              ]}
            />
            <ClassSection
              title="Class 4 - SECTION B"
              subjects={[
                { name: 'Physics', students: 32 },
                { name: 'Mathematics', students: 32 },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Class Section Component
const ClassSection = ({ title, subjects }) => {
  return (
    <div className="mb-6">
      <h3 className="text-md font-medium mb-2">{title}</h3>
      <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Subject</th>
            <th className="py-3 px-6 text-left">No.</th>
            <th className="py-3 px-6 text-center"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {subjects.map((subject, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{subject.name}</td>
              <td className="py-3 px-6 text-left">{subject.students}</td>
              <td className="py-3 px-6 text-center">
                <button className="text-gray-500 hover:text-gray-700">
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ClassSection.propTypes={
    title: PropTypes.string.isRequired,
    subjects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      students: PropTypes.number.isRequired,
    })).isRequired,
  };


export default SubjectTab;
