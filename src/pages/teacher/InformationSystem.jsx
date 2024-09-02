import { useState, useEffect, useCallback } from "react";
import { SearchComponent, SelectComponent, TabButton } from "../../components/reusables/filters";
import StudentsListTable from "../../components/tables/teacher/StudentsListTable";
import DropdownFilter from "../../components/reusables/filters/DropdownFilter";
import { MdFilterList } from "react-icons/md";
import ClassesListTable from "../../components/tables/teacher/ClassesListTable";
import ParentsListTable from "../../components/tables/teacher/ParentsListTable";
import { classData } from "../../utils/constants/_data";
import { FaEnvelope, FaSms } from "react-icons/fa";
const tabs = ["Students", "Classes", "Parents"];
const initialData = [
  {
    id: "237855",
    student: "John Mark",
    section: "Section A",
    class: "Class 3",
    email: "johnmark@mail.com",
    contact: "08143729284",
  },
  {
    id: "223855",
    student: "John Mark",
    section: "Section A",
    class: "Class 3",
    email: "johnmark@mail.com",
    contact: "08143729284",
  },
  {
    id: "343855",
    student: "John Mark",
    section: "Section C",
    class: "Class 1",
    email: "johnmark@mail.com",
    contact: "08143729284",
  },
  {
    id: "383055",
    student: "Senor Mark",
    section: "Section B",
    class: "Class 2",
    email: "johnmark@mail.com",
    contact: "08143729284",
  },
];

export default function InformationSystem() {
  const [activeTab, setActiveTab] = useState("Students");
  const [academicSession, setAcademicSession] = useState('');
  const [sectionClass, setSectionClass] = useState('');
  const [classValue, setClassValue] = useState('');
  const [subjects, setSubjects] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSearch = useCallback(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredArray = initialData.filter(item => {
      return (
        item.id.toLowerCase().includes(lowercasedFilter) ||
        item.student.toLowerCase().includes(lowercasedFilter) ||
        item.section.toLowerCase().includes(lowercasedFilter) ||
        item.class.toLowerCase().includes(lowercasedFilter) ||
        item.email.toLowerCase().includes(lowercasedFilter) ||
        item.contact.toLowerCase().includes(lowercasedFilter)
      );
    });

    // Additional filtering based on select fields
    const sessionFiltered = academicSession
      ? filteredArray.filter(item => item.section === academicSession)
      : filteredArray;

    const sectionFiltered = sectionClass
      ? sessionFiltered.filter(item => item.section === sectionClass)
      : sessionFiltered;

    const classFiltered = classValue
      ? sectionFiltered.filter(item => item.class === classValue)
      : sectionFiltered;

    const subjectFiltered = subjects
      ? classFiltered.filter(item => item.student.includes(subjects))
      : classFiltered;

    setFilteredData(subjectFiltered);
  }, [academicSession, classValue, searchTerm, sectionClass, subjects]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, academicSession, sectionClass, classValue, subjects, handleSearch]);

  const handleRowSelection = (selectedRowIds) => {
    setSelectedRows(selectedRowIds);
  };

  const handleFilterToggle = (option) => {
    setSelectedFilters((prev) => {
      if (prev.includes(option.value)) {
        return prev.filter((value) => value !== option.value);
      } else {
        return [...prev, option.value];
      }
    });
  };


  const options = [
    { label: 'Send Email', value: 'email', icon: <FaEnvelope /> },
    { label: 'Send SMS', value: 'sms', icon: <FaSms /> },
  ];
  return (
    <section>
      <div className="bg-white rounded-2xl shadow-lg mt-5">
        <TabButton
          isBorder
          tabs={tabs}
          counts={200}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
      </div>
      {/* <p className="my-2 text-3xl text-white">{activeTab} List</p> */}

      <div className={` ${activeTab === "Parents" ? "hidden" : "p-4 grid xl:grid-cols-4 grid-cols-2 gap-6"} `}>
        <div className="">
          <h2 className="text-[#54585C]">Academic Session</h2>
          <SelectComponent
            options={[{ label: 'Select academic session', value: '' }, { label: '2023/2024', value: '2023/2024' }]}
            value={academicSession}
            onChange={(e) => setAcademicSession(e.target.value)}
          />
        </div>

        <div className="">
          <h2 className="text-[#54585C]">Section/Class</h2>
          <SelectComponent
            options={[{ label: 'Select section', value: '' }, { label: 'Section A', value: 'Section A' }]}
            value={sectionClass}
            onChange={(e) => setSectionClass(e.target.value)}
          />
        </div>

        <div className="">
          <h2 className="text-[#54585C]">Class</h2>
          <SelectComponent
            options={[{ label: 'Select class', value: '' }, { label: 'Class 1', value: 'Class 1' }]}
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
        </div>

        <div className="">
          <h2 className="text-[#54585C]">Subjects</h2>
          <SelectComponent
            options={[{ label: 'Select subjects', value: '' }, { label: 'Math', value: 'Math' }]}
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-4 justify-between my-4 items-center">
        <div className="flex items-center gap-5">
          <SearchComponent
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex border rounded-xl text-[#8E959C] text-md font-semibold p-2 gap-x-4 items-center">
            <span className=" text-[#8E959C]">Filter</span>
            <MdFilterList />
          </div>
        </div>
        <DropdownFilter
          options={options}
          selectedOptions={selectedFilters}
          onOptionToggle={handleFilterToggle}
        />
      </div>

      {activeTab === "Students" && (
        <StudentsListTable
          data={filteredData}
          selectedRows={selectedRows}
          onRowSelection={handleRowSelection}
        />
      )}
      {activeTab === "Classes" && <ClassesListTable data={classData} selectedRows={selectedRows}
        onRowSelection={handleRowSelection}
      />}
      {activeTab === "Parents" && <ParentsListTable
        data={classData} selectedRows={selectedRows}
        onRowSelection={handleRowSelection}
      />}
    </section>
  );
}
