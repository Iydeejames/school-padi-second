import PortalTraffic from "../../charts/PortalTraffic";
import DashboardTimeline from "../DashboardTimeline";
import Table from "../../reusables/table/Table";
import SACard from "../../reusables/cards/SACard";
import { DateSelector } from "../../reusables/filters";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDocumentDownload } from "react-icons/hi";

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
  {
    title: "",
    key: "icon",
    render: () => <span> <HiOutlineDocumentDownload />  </span>,
  },
];

export default function Overview() {

  const handleDateChange = (date) => {
    console.log("Selected date:", date);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <img
          src="/Image.svg" // Placeholder image, replace with actual image source
          alt="User"
          className="rounded-full w-12 h-12 mr-4"
        />
        <h2 className="text-2xl text-[#6E7479] font-semibold">
          The High School
        </h2>
        <span className="ml-2 text-sm bg-green-100 text-green-500 py-1 px-2 rounded-full">
          Active
        </span>
      </div>

      <div className="flex space-x-2 mb-4">
        <span className="bg-blue-100 text-[#027FFF] py-1 px-2 rounded-xl">
          Nursery
        </span>
        <span className="bg-blue-100 text-[#027FFF] py-1 px-2 rounded-xl">
          Primary
        </span>
        <span className="bg-blue-100 text-[#027FFF] py-1 px-2 rounded-xl">
          Secondary
        </span>
      </div>
      <div className="flex items-center  my-4 justify-end gap-4">
        <div className="">
          <h1>Start Date</h1>
          <DateSelector onDateChange={handleDateChange} />
        </div>
        <div className="">
          <h1>Expiration Date</h1>
          <DateSelector onDateChange={handleDateChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <SACard
          title="No of Users"
          mainValue="1000"
          subValues={[
            { label: "Admins", value: "20" },
            { label: "Staff", value: "80" },
            { label: "Students", value: "600" },
            { label: "Parents", value: "300" },
          ]}
        />
        <SACard
          title="Subscriptions"
          mainValue="$3,600"
          subValues="$900 /per year For the past 4 years"
        />
        <SACard
          title="Add-on Subscriptions"
          mainValue="$480"
          subValues="$120 /per year For the past 4 years"
        />
        <SACard
          title="Nursery"
          mainValue="200"
          subValues={[
            { label: "Admins", value: "7" },
            { label: "Staff", value: "20" },
            { label: "Students", value: "200" },
            { label: "Parents", value: "100" },
          ]}
        />
        <SACard
          title="Primary"
          mainValue="200"
          subValues={[
            { label: "Admins", value: "7" },
            { label: "Staff", value: "30" },
            { label: "Students", value: "200" },
            { label: "Parents", value: "100" },
          ]}
        />
        <SACard
          title="Secondary"
          mainValue="200"
          subValues={[
            { label: "Admins", value: "6" },
            { label: "Staff", value: "30" },
            { label: "Students", value: "200" },
            { label: "Parents", value: "100" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 bg-white flex flex-col shadow-md rounded-md">
          <h3 className="text-gray-500 mb-2">School Information</h3>
          <table className="w-full flex-grow">
            <tbody className=" rounded-2xl">
              <tr>
                <td className="border p-2 bg-[#F9FAFB]">Name</td>
                <td className="py-1">The High School</td>
              </tr>
              <tr>
                <td className="border p-2 bg-[#F9FAFB]">Location</td>
                <td className="py-1">Street, State, Country</td>
              </tr>
              <tr>
                <td className="border p-2 bg-[#F9FAFB]">Owner</td>
                <td className="py-1">Emmanuel Okpong</td>
              </tr>
              <tr>
                <td className="p-2 border bg-[#F9FAFB]">Contact</td>
                <td className="py-1">+234 902 7325 277</td>
              </tr>
              <tr>
                <td className="p-2 bg-[#F9FAFB] border">Categories</td>
                <td className="py-1">Nursery, Primary, Secondary</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col">
          <div className="p-4 bg-white  flex-grow  shadow-md rounded-md">
            <h3 className="text-gray-500 mb-2">Portal Traffic</h3>
            <div className=" ">
            <div className="flex my-4 gap-3 items-center justify-end">
                <div className="flex  items-center">
                  <GoDotFill className="text-[#3599FF] text-xl" />{" "}
                  <span>Nursery</span>
                </div>
                <div className="flex  items-center">
                  <GoDotFill className="text-[#1671D9] text-xl" />{" "}
                  <span>Primary</span>
                </div>
                <div className="flex  items-center">
                  <GoDotFill className="text-[#F3A218] text-xl" />{" "}
                  <span>Secondary</span>
                </div>
              </div>
              <PortalTraffic />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="rounded-2xl flex-grow space-y-2 bg-white justify-between p-4 shadow-md">
            <h2 className="font-semibold text-[#8E959C] ">Notifications</h2>
            <DashboardTimeline />
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="rounded-2xl space-y-4 border  flex-grow p-4 shadow-md text-[#8E959C]">
            <h2 className="text-[#8E959C] font-semibold"> Recent Clients</h2>
            <Table columns={broadcast_column ?? []} data={data ?? []} />
          </div>
        </div>
      </div>
    </div>
  );
}
