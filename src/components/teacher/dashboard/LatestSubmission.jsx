// import { submissions_column } from "../../../utils/constants/submissionscolumn";
import { useMemo, useState } from "react";
import { submissions_column } from "../../../utils/constants/submissionscolumn";
import Table from "../../reusables/table/Table";

import PropTypes from "prop-types";

const TabButton = ({ tabs, counts, activeTab, onTabClick, isBorder }) => {
  return (
    <div className={`flex space-x-2  justify-start px-2 mb-4 `}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 flex gap-3 py-2 text-[#8A92A6] text-xs w-full rounded ${
            activeTab === tab
              ? isBorder
                ? "border-b-2 border-0 py-2 border-[#3599FF]  text-[#3599FF]"
                : "bg-accent-gradient text-white"
              : " "
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}{" "}
          {counts && (
            <span
              className={` ${
                activeTab === tab
                  ? " bg-[#3599FF] text-white"
                  : "bg-[#EEF1F4] text-[#8E959C]"
              } px-3 rounded-2xl`}
            >
              {" "}
              {counts[tab?.toLowerCase()]}{" "}
            </span>
          )}{" "}
        </button>
      ))}
    </div>
  );
};

TabButton.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  isBorder: PropTypes.bool,
  counts: PropTypes.object,
};



export default function LatestSubmissions() {
    const [activeTab, setActiveTab] = useState('Mathematics');
    const data = useMemo(() => [
        {
          avatar: "/avatar1.jpg",
          student: "Alison Werner",
          class: "Class 3",
          subject: "Mathematics",
          date: "23-06-2024",
        },
        {
          avatar: "/avatar1.jpg",
          student: "Alison Werner",
          class: "Class 3",
          subject: "English",
          date: "23-06-2024",
        },
        {
          avatar: "/avatar1.jpg",
          student: "Alison Werner",
          class: "Class 3",
          subject: "Biology",
          date: "23-06-2024",
        },
        {
          avatar: "/avatar1.jpg",
          student: "Alison Werner",
          class: "Class 3",
          subject: "Mathematics",
          date: "23-06-2024",
        },
        // Add more rows as needed
      ], [])
 
  // Memoize the counts for each subject
  const counts = useMemo(() => {
    const counts = {};
    data.forEach(item => {
      const subject = item.subject.toLowerCase();
      if (!counts[subject]) {
        counts[subject] = 0;
      }
      counts[subject]++;
    });
    return counts;
  }, [data]);

  // Memoize the filtered data based on the active tab
  const filteredData = useMemo(() => {
    return data.filter(item => item.subject === activeTab);
  }, [activeTab, data]);

  const tabs = ['Mathematics', 'English', 'Biology'];

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-sm font-[500] text-[#C8D2DC] mb-4">Latest Submissions</h2>
      <div className="flex gap-4 mb-4">
      <TabButton
        tabs={tabs}
        counts={counts}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        isBorder
        nogap={true}
      />      </div>
      <Table columns={submissions_column} data={filteredData} />
    </div>
  );
}
