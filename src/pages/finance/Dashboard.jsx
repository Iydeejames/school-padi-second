import { useState } from "react";
import { TabButton } from "../../../components/reusables/filters";

export default function FinanceDashboard() {
    const [activeTab, setActiveTab] = useState("Active");

    const tabs = ["Active", "Expired", "On trial"]

  return (
    <section className="">
    <div className="flex  my-10 items-center text-white p-4 justify-between ">
      <h2>School list</h2>
      <button className="bg-[#027FFF] px-6 py-2 rounded-2xl">
        Add School
      </button>
    </div>

    <div className=" p-3 ">
      <div className="bg-white rounded-2xl py-3 shadow-lg -mt-14">

      <TabButton
      isBorder
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={setActiveTab} />
      </div>
      {/* SchoolListTable component goes here */}
      {/* <SchoolListTable data={filteredData} /> */}
    </div>
  </section>  )
}
