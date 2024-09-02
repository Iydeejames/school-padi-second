import PortalTraffic from "../../charts/PortalTraffic";
import SACard from "../../reusables/cards/SACard";
// import DashboardTimeline from "../DashboardTimeline";
import PermissionsTable from "./PermissionTable";
import { GoDotFill } from "react-icons/go";

export default function Nursery() {
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
        <span className="ml-2 bg-green-100 text-sm text-green-500 py-1 px-2 rounded-full">
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

      <div className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
          title="Subscriptions"
          mainValue="$3,600"
          subValues="$900 /per year For the past 4 years"
        />
        <SACard
          title="Add-on Subscriptions"
          mainValue="$480"
          subValues="$120 /per year For the past 4 years"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 bg-white border flex flex-col shadow-md rounded-md">
          <h2 className="text-gray-500 mb-2">Features</h2>
          <div className=" bg-[#FAFBFC] text-[#8E959C] ">
            <PermissionsTable />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="p-4 bg-white border flex-grow  shadow-md rounded-md">
            <h3 className="text-gray-500 mb-2">Portal Traffic</h3>
            <div className=" ">
              <div className="flex my-4 gap-3 items-center justify-end">
                <div className="flex  items-center">
                  <GoDotFill className="text-[#3599FF] text-xl" />{" "}
                  <span>Admin</span>
                </div>
                <div className="flex  items-center">
                  <GoDotFill className="text-[#1671D9] text-xl" />{" "}
                  <span>Teachers</span>
                </div>
                <div className="flex  items-center">
                  <GoDotFill className="text-[#F3A218] text-xl" />{" "}
                  <span>Students</span>
                </div>
              </div>
              <PortalTraffic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
