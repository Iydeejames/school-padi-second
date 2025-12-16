import { FiPlus } from "react-icons/fi";
import { TabButton } from "../../components/reusables/filters";
import CustomSearch from "../../components/reusables/filters/CustomSearch";
import { useMemo, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import FinanceTable from "../../components/tables/superadmin/FinanceTable";
import { useNavigate } from "react-router-dom";
import { MdFilterList } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";

const tabs = ["Active", "Expired"];
const data = [
  {
    id: 1,
    fee_title: "Initial Subscription",
    payer: "The High school",
    trans_id: "123456",
    method: "Card",
    payment_date: "2022-06-19",
    payment_status: "paid",
    amount: "12800",
    type: "expired",
  },
  {
    id: 2,
    fee_title: "Initial Subscription",
    payer: "The High school",
    trans_id: "123456",
    method: "Card",
    payment_date: "2022-06-19",
    payment_status: "paid",
    amount: "12800",
    type: "expired",
  },
  {
    id: 3,
    fee_title: "Initial Subscription",
    payer: "The High school",
    trans_id: "123456",
    method: "Card",
    payment_date: "2022-06-19",
    payment_status: "paid",
    amount: "12800",
    type: "expired",
  },
  {
    id: 4,
    fee_title: "Initial Subscription",
    payer: "The High school",
    trans_id: "24789",
    method: "card",
    payment_date: "2022-06-19",
    payment_status: "paid",
    amount: "1268",
    type: "active",
  },
  {
    id: 5,
    fee_title: "Initial Subscription",
    payer: "The High school",
    trans_id: "k89256",
    method: "Transfer",
    payment_date: "2022-06-19",
    payment_status: "paid",
    amount: "12986",
    type: "active",
  },
  {
    id: 6,
    fee_title: "Initial Subscription",
    payer: "The High school",
    trans_id: "k89256",
    method: "Transfer",
    payment_date: "2022-06-19",
    payment_status: "paid",
    amount: "12986",
    type: "active",
  },
  {
    id: 7,
    fee_title: "Initial Subscription",
    payer: "The High school",
    trans_id: "k89256",
    method: "Transfer",
    payment_date: "2022-06-19",
    payment_status: "paid",
    amount: "12986",
    type: "active",
  },
  {
    id: 8,
    fee_title: "Initial Subscription",
    payer: "The High school",
    trans_id: "k89256",
    method: "Transfer",
    payment_date: "2022-06-19",
    payment_status: "paid",
    amount: "12986",
    type: "active",
  },
];
export default function Finance() {
  const [activeTab, setActiveTab] = useState("Active");
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Filter data based on active tab and search query
  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.type.toLowerCase() === activeTab.toLowerCase() &&
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [activeTab, searchQuery]);

  const counts = useMemo(() => {
    const countObj = { active: 0, expired: 0, "on trial": 0 };
    data.forEach((item) => {
      countObj[item.type.toLowerCase()] += 1;
    });
    return countObj;
  }, []);
  return (
    <section className="-my-16">
      <div className="flex my-10 items-center text-white p-4 justify-between ">
        <button
          onClick={() => navigate(-1)}
          className=" cursor-pointer flex gap-x-2"
        >
          <IoIosArrowRoundBack className="text-2xl" /> <span>Back</span>
        </button>
        <button className="bg-[#027FFF] px-6 py-2 flex items-center gap-x-2 rounded-2xl">
          <FiPlus /> <span>Add School </span>
        </button>
      </div>

      <div className=" p-3 ">
        <div className="bg-white rounded-2xl  shadow-lg -mt-14">
          <TabButton
            isBorder
            tabs={tabs}
            counts={counts}
            activeTab={activeTab}
            onTabClick={setActiveTab}
          />
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <CustomSearch
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex border rounded-xl text-[#8E959C] text-md font-semibold p-2 gap-x-4 items-center">
              <span className=" text-[#8E959C]">Filter</span>
              <MdFilterList />
            </div>
          </div>
          <div className="flex gap-2 p-3 text-[#8E959C] border rounded-xl items-center  justify-end">
            <FiPlusCircle />
            <span>Selected</span>
            <FaAngleDown />
          </div>
        </div>

        <FinanceTable data={filteredData} />
      </div>
    </section>
  );
}
