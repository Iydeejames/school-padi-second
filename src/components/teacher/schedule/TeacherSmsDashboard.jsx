import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";
import MiscIcon from "../../reusables/icons/MiscIcon";
import SMSLogs from "./smspage/SMSLogs";
import PropTypes from "prop-types"
import Credit from "./smspage/Credit";
const Tab = ({ children, isActive, onClick }) => (
  <button
    className={`xl:px-4 px-2 flex text-xs items-center xl:gap-3 gap-1   py-2 rounded-md border ${
      isActive
        ? "bg-blue-100 border-blue-300 text-blue-400"
        : " border-gray-300 text-[#8E959C]"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

Tab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,

}

const TabContent = ({ isActive, children }) =>
  isActive ? <div className="p-4">{children}</div> : null;

TabContent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
export default function TeacherSmsDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6  min-h-screen">
      <div className="flex space-x-2 mb-4">
        <Tab isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
          {" "}
          <FiEye /> Usage Stats
        </Tab>
        <Tab isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
          {" "}
          <IoChatbubblesOutline /> SMS Logs
        </Tab>
        <Tab isActive={activeTab === 2} onClick={() => setActiveTab(2)}>
          {" "}
          <FaListUl /> SMS Credit Logs
        </Tab>
      </div>

      <TabContent isActive={activeTab === 0}>
        <div className=" border rounded-xl p-4 ">
          <div className="border p-4 max-w-xl py-8 my-6 rounded-md shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="text-sm text-[#C8D2DC] mb-2">SMS Credit</h3>
              <div className="bg-blue-100 p-2 rounded-xl">
                <img src="/3d.svg" className="w-6 h-6 object-cover" alt="" />
              </div>
            </div>

            <p className="text-3xl mb-2">0</p>
            <div className="flex justify-between text-sm text-gray-500">
              <p>
                Free: <span className="font-bold text-gray-700">200</span>
              </p>
              <p>
                Purchased: <span className="font-bold text-gray-700">1000</span>
              </p>
            </div>
          </div>

          <div className="grid-cols-1 grid gap-4 md:grid-cols-3">
            <div className="border p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-sm   text-[#C8D2DC] mb-2">SMS Sent</h3>
                <div className="bg-[#FEF6E7] p-2 rounded-xl">
                  <MiscIcon color="#F3A218" />
                </div>
              </div>
              <p className="text-3xl mb-2">0</p>
            </div>
            <div className="border p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-sm  mb-2 text-[#C8D2DC]">SMS Delivered</h3>
                <div className="bg-[#E7F6EC] p-2 rounded-xl">
                  <MiscIcon color="#0F973D" />
                </div>
              </div>

              <p className="text-3xl mb-2">0</p>
            </div>
            <div className="border p-4 rounded-md shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-[#C8D2DC] mb-2">SMS Failed</h3>
                <div className="bg-[#FBEAE9] p-2 rounded-xl">
                  <MiscIcon color="#D42620" />
                </div>
              </div>
              <p className="text-3xl mb-2">0</p>
            </div>
          </div>
        </div>
      </TabContent>

      <TabContent isActive={activeTab === 1}>
        <div className="border p-4 bg-white rounded-md shadow-sm">
          <SMSLogs />
        </div>
      </TabContent>

      <TabContent isActive={activeTab === 2}>
      <div className="border p-4 bg-white rounded-md shadow-sm">
      <Credit />
        </div>
      </TabContent>
    </div>
  );
}
