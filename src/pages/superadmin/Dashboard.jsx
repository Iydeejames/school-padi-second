import SuperAdminLineChart from "../../components/charts/SuperadminLineChart";
import SuperadminPieChart from "../../components/charts/SuperAdminPieChart";
import Table from "../../components/reusables/table/Table";
import DashboardTimeline from "../../components/superadmin/DashboardTimeline";
import { BiChart } from "react-icons/bi";
const data = [
  {
    id: 1,
    school: "school 1",
    categories: "Nursery, Primary, Secondary",
    size: "800",
    features: "Only core",
    payment: "$2,000",
  },
  {
    id: 2,
    school: "school 2",
    categories: "Nursery, Primary",
    size: "800",
    features: "Only core",
    payment: "$2,000",
  },
  {
    id: 3,
    school: "school 3",
    categories: "Nursery, Primary, Secondary",
    size: "800",
    features: "Only core",
    payment: "$2,000",
  },
];
const broadcast_column = [
  {
    title: "School",
    key: "school",
    render: (data) => (
      <p className="flex   gap-2">
        {" "}
        <img className="" src="/person.svg" /> {data.school}
      </p>
    ),
  },
  {
    title: "Categories",
    key: "categories",
    render: (data) => (
      <div className="flex space-x-1">
        {data.categories.split(", ").map((category, index) => (
          <span
            key={index}
            className={` ${
              index === 0 && "-ml-4"
            } - bg-[#E6F2FF] text-black p-1 h-6 w-6 flex items-center justify-center rounded-full`}
          >
            {/* {index} */}
            {category.charAt(0)}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Size",
    key: "size",
    render: (data) => <span className="min-w-[10rem]">{data.size}</span>,
  },
  {
    title: "Features",
    key: "features",
    render: (data) => (
      <span className="min-w-[10rem]">{data.features ?? "Not Available"}</span>
    ),
  },
  {
    title: "Payment",
    key: "payment",
    render: (data) => <span>{data.payment ?? "Not Available"}</span>,
  },
];
export default function Dashboard() {
  return (
    <section className="">
      <div className=" grid xl:grid-cols-3  grid-cols-1 gap-x-8 gap-y-8 ">
        <div className="xl:col-span-2 col-span-1 flex flex-col space-y-10 rounded-2xl">
          <div className="rounded-2xl flex-grow flex bg-white w-full justify-between items-start p-3 shadow-md">
            <div className="space-y-5 w-full">
              <h3 className="">No of Schools</h3>
              <h2 className="text-4xl text-[#6E7479] font-semibold ">1500</h2>
              <div className="flex justify-between w-full">
                <p className="p-2 text-sm bg-[#F2F5F7] rounded-full">
                  Admins: 10,000
                </p>
                <p className="p-2 text-sm bg-[#F2F5F7] rounded-full">
                  Staff: 20,000
                </p>
                <p className="p-2 text-sm bg-[#F2F5F7] rounded-full">
                  Students: 50,000
                </p>
                <p className="p-2 text-sm bg-[#F2F5F7] rounded-full">
                  Parents: 20,000
                </p>
                <p className="p-2 text-sm bg-[#F2F5F7] rounded-full">
                  Total: 100,000
                </p>
              </div>
            </div>
            <div className="bg-[#E6F2FF]  rounded-xl p-1 flex items-center justify-center">
              <img src="/3d.svg" className="w-10 h-10 object-cover" alt="" />
            </div>
          </div>

          <div className="flex xl:flex-row flex-col gap-10">
            <div className="rounded-2xl flex bg-white border w-full  justify-between items-start p-3 shadow-md">
              <div className="space-y-5 w-full">
                <h3 className="font-semibold text-[#6E7479]">Paid Invoice</h3>
                <h2 className="text-4xl text-[#6E7479] font-semibold ">
                  $43,846
                </h2>
                <div className="flex items-center w-full">
                  <p className="p-2 text-sm bg-[#E7F6EC] text-[#40B869] rounded-full flex items-center gap-x-2">
                    <BiChart /> 12.48%
                  </p>
                  <p className="p-2 text-sm  rounded-full">
                    Compared to last month
                  </p>
                </div>
              </div>
              <div className="bg-[#E6F2FF] rounded-xl p-1 flex items-center justify-center">
                <img src="/3d.svg" className="w-10 h-10 object-cover" alt="" />
              </div>
            </div>
            <div className="rounded-2xl flex bg-white border w-full justify-between items-start p-3 shadow-md">
              <div className="space-y-5 w-full">
                <h3 className="text-[#6E7479] font-semibold">Subscriptions</h3>
                <h2 className="text-4xl text-[#6E7479] font-semibold ">1380</h2>
                <div className="flex justify-between w-full">
                  <p className="p-2 text-sm bg-[#F2F5F7] rounded-full">
                    Admins: 10,000
                  </p>
                  <p className="p-2 text-sm bg-[#F2F5F7] rounded-full">
                    Staff: 20,000
                  </p>
                </div>
              </div>
              <div className="bg-[#E6F2FF] rounded-xl p-1 flex items-center justify-center">
                <img src="/3d.svg" className="w-10 h-10 object-cover" alt="" />
              </div>
            </div>
          </div>

          <div className="graph bg-white border rounded-2xl shadow-md p-2">
            <h3 className="text-[#8E959C] font-semibold">Cloud Traffic</h3>
            <SuperAdminLineChart />
          </div>
        </div>
        {/* Second col Timeline */}
        <div className="col-span-1 flex flex-col">
          <div className="rounded-2xl flex-grow space-y-2 bg-white justify-between p-4 shadow-md">
            <h2 className="font-semibold text-[#8E959C] ">Notifications</h2>
            <DashboardTimeline />
          </div>
        </div>
        <div className="xl:col-span-2 col-span-1 flex flex-col">
          <div className="rounded-2xl space-y-4 border  flex-grow p-4 shadow-md text-[#8E959C]">
            <h2 className="text-[#8E959C] font-semibold"> Recent Clients</h2>
            <Table columns={broadcast_column ?? []} data={data ?? []} />
          </div>
        </div>
        <div className="chart col-span-1 flex flex-col">
          <div className="bg-white border p-4 mt-10 shadow-md rounded-2xl flex-grow">
            <h3 className="text-[#8E959C] font-semibold">User Percentage</h3>

            <SuperadminPieChart />
          </div>
        </div>
      </div>
    </section>
  );
}
