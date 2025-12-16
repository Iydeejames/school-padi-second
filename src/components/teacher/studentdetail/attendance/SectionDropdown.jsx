import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import PropTypes from 'prop-types';

const sections = [
  { label: "SECTION A" },
  { label: "SECTION B" },
  { label: "SECTION C" },
  { label: "SECTION D" },
  { label: "SECTION E" },
];

const categories = [
  {
    label: "Kindergarten",
    classes: ["Nursery 1", "Nursery 2"],
  },
  {
    label: "Primary",
    classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
  },
];

export default function SectionDropdown  ({ onSelect })  {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [classSearchTerm, setClassSearchTerm] = useState('');
  const [sectionSearchTerm, setSectionSearchTerm] = useState('');

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setSelectedClass(null); // Reset class selection when section changes
    setIsCategoryOpen(true); // Open the categories when a section is selected
    onSelect(section);
  };

  const handleClassSelect = (selectedClass) => {
    setSelectedClass(selectedClass);
    onSelect(selectedClass);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsCategoryOpen(false); // Close categories if dropdown is closed
  };

  const filteredSections = sections.filter((section) =>
    section.label.toLowerCase().includes(sectionSearchTerm.toLowerCase())
  );

  const filteredCategories = categories.map(category => ({
    ...category,
    classes: category.classes.filter(cls =>
      cls.toLowerCase().includes(classSearchTerm.toLowerCase())
    )
  }));

  return (
    <div className="relative w-72">
      <div 
        className="relative w-full py-3 h-16 border border-gray-300 rounded-lg pl-4 pr-8 cursor-pointer flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span className={`text-[#D3DBE3] ${selectedSection ? 'text-gray-900' : ''}`}>
          {selectedSection ? selectedSection : "Select section/class"}
        </span>
        {isOpen ? (
          <IoIosArrowUp className="text-gray-400" />
        ) : (
          <IoIosArrowDown className="text-gray-400" />
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search sections..."
              className="w-full pl-4 pr-8 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={sectionSearchTerm}
              onChange={(e) => setSectionSearchTerm(e.target.value)}
            />
            <ul>
              {filteredSections.map((section, index) => (
                <li
                  key={index}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSectionSelect(section.label)}
                >
                  <input
                    type="radio"
                    name="section"
                    value={section.label}
                    checked={selectedSection === section.label}
                    onChange={() => handleSectionSelect(section.label)}
                    className="mr-2"
                  />
                  <span className="text-[#54585C]">{section.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isCategoryOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search classes..."
              className="w-full pl-4 pr-8 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={classSearchTerm}
              onChange={(e) => setClassSearchTerm(e.target.value)}
            />
            {filteredCategories.map((category) => (
              <div key={category.label} className="mb-4">
                <div className="font-semibold text-gray-700">{category.label}</div>
                <div className="mt-2">
                  {category.classes.map((cls) => (
                    <label key={cls} className="flex items-center space-x-2 mb-2">
                      <input
                        type="radio"
                        name="class"
                        value={cls}
                        onChange={() => handleClassSelect(cls)}
                        checked={selectedClass === cls}
                        className="form-radio"
                      />
                      <span className="text-[#54585C]">{cls}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
SectionDropdown.propTypes ={
    onSelect: PropTypes.func.isRequired,
}