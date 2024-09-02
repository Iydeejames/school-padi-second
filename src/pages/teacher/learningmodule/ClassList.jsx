import { useState } from 'react';
import { IoDocumentOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const ClassList = () => {
    const navigate = useNavigate()

  const tabs = [
    { id: 'math', label: 'MTH - Mathematics' },
    { id: 'eng', label: 'ENG - English' },
    { id: 'bio', label: 'BIO - Biology' },
    { id: 'chm', label: 'CHM - Chemistry' },
    { id: 'phy', label: 'PHY - Physics' },
    { id: 'lab', label: 'LAB - Laboratory' },
  ];

  const [activeTab, setActiveTab] = useState('math');

  const tableData = {
    math: [
      { class: 'Class 3', students: 36, male: 18, female: 18 },
      { class: 'Class 3', students: 36, male: 20, female: 16 },
      { class: 'Class 3', students: 36, male: 14, female: 22 },
      { class: 'Class 3', students: 36, male: 17, female: 19 },
    ],
    eng: [
      { class: 'Class 4', students: 40, male: 22, female: 18 },
      { class: 'Class 4', students: 40, male: 23, female: 17 },
      { class: 'Class 4', students: 40, male: 19, female: 21 },
      { class: 'Class 4', students: 40, male: 20, female: 20 },
    ],
    bio: [
      { class: 'Class 5', students: 32, male: 16, female: 16 },
      { class: 'Class 5', students: 32, male: 15, female: 17 },
      { class: 'Class 5', students: 32, male: 18, female: 14 },
      { class: 'Class 5', students: 32, male: 17, female: 15 },
    ],
    chm: [
      { class: 'Class 6', students: 45, male: 24, female: 21 },
      { class: 'Class 6', students: 45, male: 22, female: 23 },
      { class: 'Class 6', students: 45, male: 23, female: 22 },
      { class: 'Class 6', students: 45, male: 21, female: 24 },
    ],
    phy: [
      { class: 'Class 7', students: 50, male: 26, female: 24 },
      { class: 'Class 7', students: 50, male: 28, female: 22 },
      { class: 'Class 7', students: 50, male: 27, female: 23 },
      { class: 'Class 7', students: 50, male: 25, female: 25 },
    ],
    lab: [
      { class: 'Class 8', students: 38, male: 19, female: 19 },
      { class: 'Class 8', students: 38, male: 20, female: 18 },
      { class: 'Class 8', students: 38, male: 21, female: 17 },
      { class: 'Class 8', students: 38, male: 18, female: 20 },
    ],
  };

  return (
<section>
<div className="flex -mt-8 mb-6 px-2 justify-between text-3xl text-white items-center w-full">
          <span> Classlist</span>{" "}
      </div>


    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Tabs */}
     
      <div className="flex overflow-x-auto justify-between my-4  gap-9 border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 flex whitespace-nowrap items-center gap-5 rounded-xl ${
              activeTab === tab.id
                ? 'bg-[#027FFF] text-white '
                : 'bg-[#B6BFC8] text-gray-600'
            } focus:outline-none hover:bg-blue-500 hover:text-white transition-colors`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}  {activeTab === tab.id ? <div className='w-5  h-5 flex items-center justify-center rounded-full border border-white'>   <div className='w-3 h-3 rounded-full border border-white'> </div>   </div> : <div className='w-5 h-5 flex items-center justify-center rounded-full border border-white'></div>   }   
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50 text-[#8E959C]">
              <th className="border border-gray-200 px-4 py-2 text-left">Class</th>
              <th className="border border-gray-200 px-4 py-2 text-left">No of Students</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Male</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Female</th>
              <th className="border border-gray-200 px-4 py-2 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {tableData[activeTab].map((row, index) => (
              <tr key={index} className="hover:bg-gray-100 text-[#8E959C]" >
                <td className="border border-gray-200 px-4 min-w-40 py-2">{row.class}</td>
                <td className="border border-gray-200 px-4 min-w-40 py-2">{row.students}</td>
                <td className="border border-gray-200 px-4 py-2">{row.male}</td>
                <td className="border border-gray-200 px-4 py-2">{row.female}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <button className="" 
                  onClick={() => navigate("/t/learning-module/attendance")}
                  >
                   <IoDocumentOutline size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</section>

  );
};

export default ClassList;
