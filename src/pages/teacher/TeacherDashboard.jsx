import {
  DetailedInfoCard,
  EventItem,
  InfoCard,
} from "../../components/reusables/cards/teacher";
import { useState } from "react";
import LatestSubmissions from "../../components/teacher/dashboard/LatestSubmission";
import UpcomingClasses from "../../components/teacher/dashboard/UpcomingClasses";
import {
  AttendanceBarChart,
  ClassAttendanceBarChart,
  RadarChartComponent,
} from "../../components/charts/teacher";
import {
  attendanceData,
  classAttendanceData,
  radarData,
} from "../../utils/constants/teacherDashboardChart";
import Calendar from "../../components/reusables/calendar";
import { FaRegCalendarMinus } from "react-icons/fa";
import ChatComponent from "../../components/teacher/dashboard/ChatComponent";
import { NoticeBoard } from "../../components/teacher/dashboard/NoticeBoard";
import Timetable from "../../components/teacher/dashboard/Timetable";
import { GoDotFill } from "react-icons/go";

const noticesData = [
  {
    title: "Cancellation of Sports Activities",
    description:
      "Dear Students, Faculty, and Parents, Due to unforeseen circumstances, all sports activities scheduled for this week, including practices and matches, are hereby canceled. This decision has been made to ensure the safety and well-being of all participants.",
    date: "19 Jun",
  },
  {
    title: "Cancellation of Sports Activities",
    description:
      "Dear Students, Faculty, and Parents, Due to unforeseen circumstances, all sports activities scheduled for this week, including practices and matches, are hereby canceled. This decision has been made to ensure the safety and well-being of all participants.",
    date: "19 Jun",
  },
  {
    title: "Cancellation of Sports Activities",
    description:
      "Dear Students, Faculty, and Parents, Due to unforeseen circumstances, all sports activities scheduled for this week, including practices and matches, are hereby canceled. This decision has been made to ensure the safety and well-being of all participants.",
    date: "19 Jun",
  },
];

export default function TeacherDashboard() {
  const [activeIndex, setActiveIndex] = useState(null);

  const events = [
    {
      avatar: "OM",
      title: "Leading text",
      description: "Description",
      time: "11:00am",
    },
    {
      avatar: "OM",
      title: "Leading text",
      description: "Description",
      time: "11:00am",
    },
    {
      avatar: "OM",
      title: "Leading text",
      description: "Description",
      time: "11:00am",
    },
  ];

  return (
    <section className="p-4">
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">
        {/* Left two-thirds section */}
        <div className="col-span-2 flex flex-col gap-y-8">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-8 flex-grow">
            <div className="flex flex-col space-y-4">
              <InfoCard
                title="No of Students"
                mainValue="300"
                details={[
                  { label: "Male", value: "150" },
                  { label: "Female", value: "150" },
                  { label: "Parents", value: "200" },
                ]}
                icon={
                  <div className="bg-[#E6F2FF] h-10 w-10 p-2 rounded-xl">
                    <img src="/3d.svg" className="" alt="" />
                  </div>
                }
              />
              <InfoCard
                title="New Submission"
                mainValue="100"
                details={[
                  { label: "Assignments", value: "40" },
                  { label: "Projects", value: "20" },
                  { label: "Exam", value: "40" },
                ]}
                icon={
                  <div className="bg-[#E6F2FF] h-10 w-10 p-2 rounded-xl">
                    <img src="/3d.svg" className="" alt="" />
                  </div>
                }
              />
            </div>
            <div className="flex flex-col flex-grow">
              <DetailedInfoCard
                title="No of Subjects/students"
                mainValue="8"
                details={[
                  { label: "Mathematics", value: "32" },
                  { label: "English", value: "32" },
                  { label: "Biology", value: "32" },
                  { label: "Chemistry", value: "32" },
                  { label: "Physics", value: "32" },
                  { label: "Lab", value: "32" },
                ]}
                extraDetails={[
                  { label: "Male", color: "bg-blue-500" },
                  { label: "Female", color: "bg-blue-500" },
                ]}
                icon={
                  <div className="bg-[#E6F2FF] h-10 w-10 p-2 rounded-xl">
                    <img src="/3d.svg" className="" alt="" />
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* Right one-third section for Events */}
        <div className="xl:col-span-1 col-span-2 flex flex-col flex-grow">
          <div className="bg-white shadow-lg rounded-lg p-4 flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-sm font-[500] text-[#C8D2DC]">Events</h2>
                <h2 className="text-2xl font-bold text-[#6E7479]">Today</h2>
              </div>
              <div className="bg-[#E6F2FF] h-10 w-10 p-2 rounded-xl">
                <img src="/3d.svg" className="" alt="" />
              </div>
            </div>
            <div className="space-y-3 flex-grow">
              {events.map((event, index) => (
                <EventItem
                  key={index}
                  avatar={event.avatar}
                  title={event.title}
                  description={event.description}
                  time={event.time}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 flex-grow">
          {/* Latest Submissions */}
          <div className="flex-grow border rounded-xl">
            <LatestSubmissions />
          </div>
        </div>
        <div className="col-span-1 flex-grow">
          <UpcomingClasses />
        </div>
      </div>
      <div className=" my-6 grid xl:grid-cols-2 grid-cols-1 gap-8 flex-grow">
        <div className="bg-white shadow-lg border rounded-lg flex-grow p-4">
          <h2 className="text-sm font-[500] text-[#C8D2DC]">
            Class Distribution
          </h2>
          <div className=" ml-auto w-36">
            <div className=" flex items-center gap-3">
              <GoDotFill className="text-[#0274E8]" />
              <p>Female</p>
            </div>
            <div className=" flex items-center gap-3">
              <GoDotFill className="text-[#3599FF]" />
              <p>Male</p>
            </div>
          </div>
          <RadarChartComponent data={radarData} />
        </div>
        <div className="flex flex-col p-4 gap-8 bg-white border shadow-lg rounded-lg flex-grow">
          <div className="">
            <h2 className="text-sm mb-4 font-[500] text-[#C8D2DC]">
              Student Attendance (Total)
            </h2>

            <AttendanceBarChart data={attendanceData} />
          </div>
          <div className="">
            <h2 className="text-sm mb-4 font-[500] text-[#C8D2DC]">
              Student Attendance (Classes)
            </h2>

            <ClassAttendanceBarChart data={classAttendanceData} />
          </div>
        </div>
      </div>
      <div className="p-4 bg-white border shadow-lg rounded-lg">
        <h2 className="text-sm mb-4 font-[500] text-[#C8D2DC]">
          Class Distribution
        </h2>

        <Timetable />
      </div>

      <div className="grid xl:grid-cols-3 gap-8 mt-8">
        <div className="col-span-2 flex flex-col h-full">
          <div className="flex justify-between border w-full p-4">
            <p className="text-[#C8D2DC]">Calendar</p>
            <div className="bg-[#E6F2FF] rounded-2xl text-[#3599FF] p-4 ">
              <FaRegCalendarMinus />
            </div>
          </div>
          <div className="flex-grow">
            <Calendar />
          </div>
        </div>
        <div className="xl:col-span-1 col-span-2 flex flex-col h-full">
          <ChatComponent />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 gap-8 mt-8">
        <div className="col-span-2 flex flex-col h-full">
          <NoticeBoard notices={noticesData} />
        </div>
        <div className="xl:col-span-1 col-span-2 flex flex-col h-full">
          <div className="bg-white border shadow-lg rounded-lg p-4 flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-sm font-bold text-[#C8D2DC]">Birthdays</h2>
                <h2 className="text-2xl font-bold text-[#6E7479]">Today</h2>
              </div>
              <div className="bg-[#E6F2FF] h-10 w-10 p-2 rounded-xl">
                <img src="/3d.svg" className="" alt="" />
              </div>
            </div>
            <div className="space-y-3 flex-grow">
              {events.map((event, index) => (
                <EventItem
                  key={index}
                  avatar={event.avatar}
                  title={event.title}
                  description={event.description}
                  time={event.time}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
