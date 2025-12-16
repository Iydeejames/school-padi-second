import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faPlus, faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons';
import Calendar from "../../reusables/calendar";
import { FaRegCalendarMinus } from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'; 




const AdminDashboard = () => {
  
  // Sample data for the line chart
  const data = [
    { name: '0', Nursery: 400, Primary: 240, Secondary: 240 },
    { name: '1', Nursery: 300, Primary: 139, Secondary: 221 },
    { name: '2', Nursery: 200, Primary: 980, Secondary: 229 },
    { name: '3', Nursery: 278, Primary: 390, Secondary: 200 },
    { name: '4', Nursery: 189, Primary: 480, Secondary: 218 },
    { name: '5', Nursery: 239, Primary: 380, Secondary: 250 },
    { name: '6', Nursery: 349, Primary: 430, Secondary: 210 },
    { name: '7', Nursery: 200, Primary: 250, Secondary: 300 },
    { name: '8', Nursery: 278, Primary: 300, Secondary: 270 },
    { name: '9', Nursery: 350, Primary: 370, Secondary: 320 },
    { name: '10', Nursery: 310, Primary: 310, Secondary: 330 },
    { name: '12', Nursery: 410, Primary: 450, Secondary: 420 },
  ];

  // Sample data for the pie chart
  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  // Sample data for the bar chart
  const barData = [
    { category: 'Jan', Income: 100, Expenses: 90, Balance: 100 },
    { category: 'Jan', Income: 100, Expenses: 120, Balance: 80 },
    { category: 'Feb', Income: 135, Expenses: 145, Balance: 105 },
    { category: 'March', Income: 110, Expenses: 115, Balance: 120 },
    { category: 'April', Income: 100, Expenses: 120, Balance: 140 },
    { category: 'May', Income: 135, Expenses: 145, Balance: 120 },
    { category: 'June', Income: 110, Expenses: 70, Balance: 80 },
    { category: 'July', Income: 100, Expenses: 120, Balance: 140 },
    { category: 'Aug', Income: 60, Expenses: 145, Balance: 155 },
    { category: 'Sept', Income: 110, Expenses: 115, Balance: 120 },
    { category: 'Oct', Income: 100, Expenses: 90, Balance: 140 },
    { category: 'Nov', Income: 135, Expenses: 145, Balance: 155 },
    { category: 'Dec', Income: 110, Expenses: 90, Balance: 100 },
  ];

  // Sample data for the radar chart
  const radarData = [
    { subject: 'Category', A: 120, B: 110, C: 130 },
    { subject: 'Category', A: 98, B: 130, C: 120 },
    { subject: 'Category', A: 86, B: 130, C: 115 },
    { subject: 'Category', A: 99, B: 100, C: 110 },
    { subject: 'Category', A: 85, B: 90, C: 100 },
    { subject: 'Category', A: 65, B: 85, C: 95 },
  ];

  const COLORS = ['#CCE5FF', '#3599FF', '#0274E8', '#027FFF'];


  return (
    
    <>
     <div className='overflow-x-hidden'>
      <nav className="bg-[#014F9E] p-4">
        

      </nav>



{/* New section: White background with boxes */}
<div className="bg-white p-6 relative">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Box 1: Overlapping the black navbar */}
    <div className="bg-white p-6 rounded-lg shadow-md relative flex flex-col justify-between items-start z-10 md:-mt-12 min-h-[150px]">
      {/* Content for Box 1 */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-start mb-4">
        <span className="text-sm   text-[#C8D2DC]">No of Students</span>
          <span className="text-xl text-[#6E7479]">12,000</span>
        </div>
        <div className="grid grid-cols-4 gap-12 w-full text-sm text-[#6E7479]">
          <div className="flex flex-col   items-center">
            <span>Active</span>
            <span className="text-xl ">100</span>
          </div>
          <div className="flex flex-col  items-center">
            <span>Alumni</span>
            <span className="text-xl">135</span>
          </div>
          <div className="flex flex-col items-center">
            <span>License</span>
            <span className="text-xl">110</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Parents</span>
            <span className="text-xl">70</span>
          </div>
        </div>
      </div>
    </div>

{/* Box 2: Overlapping the black navbar */}
<div className="bg-white p-6 rounded-lg shadow-md relative flex flex-col justify-between items-start z-10 md:-mt-12 min-h-[150px]">
  {/* Content for Box 2 */}
  <div className="flex flex-col justify-between h-full">
    <div className="flex flex-col items-start mb-4">
      <span className="text-sm text-[#C8D2DC]">No of Staff</span>
      <span className="text-xl text-[#6E7479]">400</span>
    </div>
    <div className="grid grid-cols-3 gap-12 w-full text-sm text-[#6E7479]">
          <div className="flex flex-col items-center">
            <span>Admins</span>
            <span className="text-xl">100</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Teachers</span>
            <span className="text-xl">135</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Non-teaching</span>
            <span className="text-xl">110</span>
          </div>
        
        </div>
  </div>
</div>


<div
  className="bg-white p-4 shadow-md row-span-2 relative rounded-lg"
  style={{ marginTop: '-50px', height: 'calc(100% + 50px)', zIndex: 10 }}
>
  <div className="flex justify-between items-center">
    <span className=" text-[#C8D2DC] font-medium">Events</span>
    <span className="text-gray-400">Daily</span>
  </div>
  <h1 className="text-xl text-[#6E7479]">Today</h1>

  {/* Three larger boxes inside double-height box */}
  <div className="mt-4 grid grid-cols-1 gap-4">
    {/* Larger Box 1 */}
    <div className="bg-[#014F9E] p-4 shadow-inner rounded-2xl flex-grow">
      <div className="flex justify-between items-center">
        <span className="text-white">Revenue</span>
        <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
          11:00am
        </span>
      </div>
    </div>

    {/* Larger Box 2 */}
    <div className="bg-[#F2F5F7] p-4 shadow-inner rounded-2xl flex-grow">
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Expenses</span>
        <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
        11:00am
        </span>
      </div>
    </div>

    {/* Larger Box 3 */}
    <div className="bg-[#F2F5F7] p-4 shadow-inner rounded-2xl flex-grow">
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Net Profit</span>
        <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
        11:00am
        </span>
      </div>
    </div>
  </div>
</div>





    {/* Box 4: Regular box alignment, equal height for small screens */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between items-start min-h-[150px]">
      {/* Content for Box 4 */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-start mb-4">
        <span className="text-sm font-grandis  text-[#C8D2DC]">New Submission</span>
          <span className="text-xl text-[#6E7479]">800</span>
        </div>
        <div className="grid grid-cols-3 gap-12 w-full text-sm text-[#6E7479]">
          <div className="flex flex-col items-center">
            <span>Admissions</span>
            <span className="text-xl">100</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Registration</span>
            <span className="text-xl">135</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Forms</span>
            <span className="text-xl">110</span>
          </div>
      
        </div>
      </div>
    </div>

    {/* Box 5: Regular box alignment, equal height for small screens */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between items-start min-h-[150px]">
      {/* Content for Box 5 */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-start mb-4">
          <span className="text-sm text-[#C8D2DC]">Messages</span>
          <span className="text-xl text-[#6E7479]">400</span>
        </div>
        <div className="grid grid-cols-3 gap-12 w-full text-sm text-[#6E7479]">
          <div className="flex flex-col  items-center">
            <span>Admins</span>
            <span className="text-xl">100</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Teachers</span>
            <span className="text-xl ">135</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Non-Teaching</span>
            <span className="text-xl ">110</span>
          </div>
        </div>
      </div>
    </div>
      </div>

      
      <div className="relative  mt-4 px-4 w-full">
        {/* Data Visualization Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 mx-4">
          {/* Line Chart */}
          <div className="bg-white p-4 border rounded-lg">
            <h2 className="text-lg text-[#C8D2DC] font-bold mb-4">Student No Levels</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Nursery" stroke="#1671D9" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Primary" stroke="#3599FF" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Secondary" stroke="#F3A218" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          
{/* Pie Chart */}
<div className="bg-white p-4 border rounded-lg relative">
  {/* Status Labels */}
  <div className="absolute top-4 right-4 flex flex-col space-y-1 text-sm">
    <div className="flex items-center">
      <span className="h-3 w-3 rounded-full bg-[#0274E8] inline-block mr-2"></span>
      <span>Accepted</span>
    </div>
    <div className="flex items-center">
      <span className="h-3 w-3 rounded-full bg-[#CCE5FF] inline-block mr-2"></span>
      <span>In Progress</span>
    </div>
    <div className="flex items-center">
      <span className="h-3 w-3 rounded-full bg-[#027FFF] inline-block mr-2"></span>
      <span>Pending</span>
    </div>
    <div className="flex items-center">
      <span className="h-3 w-3 rounded-full bg-[#3599FF] inline-block mr-2"></span>
      <span>Rejected</span>
    </div>
  </div>

  <h2 className="text-lg text-[#C8D2DC] font-bold mb-4">Category Distribution</h2>
  <ResponsiveContainer width="100%" height={300}>
    <PieChart width={320} height={320}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
</div>




{/* Bar Chart */}
<div className="bg-white font-grandis p-4 border rounded-lg ">
  <h2 className="text-lg font-bold text-[#C8D2DC] mb-4">Finance</h2>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={barData} barGap={18}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Legend />
      <Bar dataKey="Income" fill={COLORS[0]} barSize={10} radius={[10, 10, 0, 0]} />
      <Bar dataKey="Expenses" fill={COLORS[1]} barSize={10} radius={[10, 10, 0, 0]} />
      <Bar dataKey="Balance" fill={COLORS[2]} barSize={10} radius={[10, 10, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>



          {/* Radar Chart */}
          <div className="bg-white p-4 border font-grandis rounded-lg ">
            <h2 className="text-lg font-bold text-[#C8D2DC] mb-4">Enrollment process</h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />  
                
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="A" dataKey="A" stroke={COLORS[0]} fillOpacity={0} />
                <Radar name="B" dataKey="B" stroke={COLORS[1]} fillOpacity={0} />
                <Radar name="C" dataKey="C" stroke={COLORS[2]} fillOpacity={0} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      </div>
      <div className="flex flex-col space-y-4 mt-8 px-8 md:px-14 ">
  {/* Calendar and Chat Container */}
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 ">

{/* Calendar Card 
<div className="bg-white rounded-lg shadow-md border font-grandis border-gray-300 p-4 md:w-2/3 w-full relative">
  <div className="flex justify-between items-center mb-4">
    <div>
      <h2 className="text-xs font-bold text-gray-300">Calendar</h2>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-xl font-semibold text-gray-800">July 2024</span>
        <div className="flex items-center border border-blue-500 rounded px-2 py-1 text-blue-500 text-xs cursor-pointer">
          <span>Month</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      
    <div className="relative flex flex-col items-end space-y-2 p-2">
  <FontAwesomeIcon
    icon={faCalendar}
    className="bg-[#E6EAEF] text-blue-500 rounded-md p-1 text-xs sm:text-sm"
  />
  <div className="flex items-center space-x-2">
    <i className="fas fa-search bg-[#E6EAEF] text-blue-500 rounded-md p-1 text-xs sm:text-sm cursor-pointer"></i>
    <button className="flex items-center bg-[#027FFF] text-white px-2 py-1 text-xs sm:text-sm rounded">
      <i className="mr-1"></i> Add Event
      <FontAwesomeIcon icon={faPlus} className="text-white px-1 text-xs sm:text-sm" title="Add" />
    </button>
  </div>
</div>
    </div>
  </div>
  <div className="grid grid-cols-7 text-gray-100 text-center">
    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
      <div key={index} className="border border-gray-300 font-bold text-gray-700 py-2 text-xs">
        {day}
      </div>
    ))}
  </div>
  <div className="grid grid-cols-7 text-center border-1 text-gray-400 border-b border-gray-300">
    {Array.from({ length: 31 }, (_, i) => (
      <div
        key={i}
        className="h-24 flex items-start justify-start border-r border-t border-gray-300"
      >
        <span className="text-xs p-2">{i + 1}</span>
      </div>
    ))}

    {Array.from({ length: 4 }, (_, i) => (
      <div
        key={`empty-${i}`}
        className="h-24 border-r border-t border-gray-300"
      ></div>
    ))}
  </div>
</div>
*/}


<div className="col-span-2 flex flex-col h-full w-full lg:w-[67%]">
  <div className="flex justify-between border w-full p-4">
    <p className="text-[#C8D2DC]">Calendar</p>
    <div className="bg-[#E6F2FF] rounded-2xl text-[#3599FF] p-4">
      <FaRegCalendarMinus />
    </div>
  </div>
  <div className="flex-grow">
    <Calendar />
  </div>
</div>


    {/* Chat Box Card */}
<div className="bg-white rounded-lg shadow-md border border-gray-300 font-grandis p-4 md:w-1/3 w-full  relative">
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center space-x-2">
      <h2 className="text-blue-500 font-semibold underline">All Chats</h2>
      <span className="text-xs text-white bg-[#027FFF] rounded-xl px-1.5 py-1 ">12</span>
    </div>
    <div className="flex items-center space-x-14">
      <div className="flex items-center space-x-1">
        <i className=" text-gray-500"></i>
        <FontAwesomeIcon icon={faUser} className="text-gray-300 text-md" title="Sound" />
        <span className="text-xs bg-gray-300 rounded-xl px-2 py-1 text-gray-600">3</span>
      </div>
      <div className="flex items-center space-x-1">
        <i className=" text-gray-500"></i>
        <FontAwesomeIcon icon={faUsers} className="text-gray-300 text-md" title="Sound" />
        <span className="text-xs bg-gray-300 rounded-xl px-2 py-1 text-gray-600">7</span>
      </div>
    </div>
  </div>
  <div className="flex flex-col space-y-2 divide-y divide-gray-200">
    {[
      { name: "Alice", message: "Hey, how's the project going?", time: "10:15 AM", unread: 2 },
      { name: "Bob", message: "We're on track for the deadline!", time: "9:00 AM", unread: 0 },
      { name: "Charlie", message: "Don't forget the meeting tomorrow.", time: "8:45 AM", unread: 1 },
      { name: "Diana", message: "Can someone review my latest PR?", time: "Yesterday", unread: 0 },
      { name: "Eve", message: "Sure, I'll take a look later today.", time: "Yesterday", unread: 0 },
      { name: "Frank", message: "Great work, team!", time: "2 days ago", unread: 3 },
      { name: "Grace", message: "Looking forward to our next sprint.", time: "2 days ago", unread: 0 },
    ].map((chat, index) => (
      <div key={index} className="flex justify-between items-center py-2">
        <div className="flex items-center  space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm">
            {chat.name[0]} 
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{chat.name}</p>
            <p className="text-sm text-gray-600 w-[70%] truncate">{chat.message}</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-1">
          <span className="text-xs text-gray-500">{chat.time}</span>
          {chat.unread > 0 && (
            <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
  </div>
</div>


<div className="flex flex-col space-y-4 mt-8 mb-24 px-8 md:px-14">
  {/* Notice Board/ Birthdays */}
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">

    {/* Notice Board Card */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-4 md:w-2/3 w-full">
      {/* Header with Notice Board Title */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xs text-[#C8D2DC] font-bold">Notice Board</h2>
          <span className="text-gray-500">19 Jun</span>
        </div>
      </div>
      
      {/* School Information Aligned Horizontally */}
      <div className="overflow-x-auto scrollbar-thin" style={{ scrollbarWidth: 'thin', scrollbarColor: '#C8D2DC #EEF1F9' }}>
        <div className="flex flex-nowrap justify-between text-xs text-[#C8D2DC] mb-6 space-x-4">
          {['School', 'Admin', 'Teachers', 'Students', 'Parents'].map((item, index) => (
            <div key={index} className="text-center flex items-center min-w-[120px] mb-0">
              <h3 className="font-semibold text-sm mr-2 text-gray-400">{item}</h3>
              <span className="text-xs bg-gray-100 rounded-xl px-1 py-.5 text-gray-400">{[12, 2, 6, 9, 10][index]}</span>
            </div>
          ))}
        </div>
        {/* Grey line under the school information */}
        <div className="border-b border-[#EEF1F4] w-full mb-4"></div>
      </div>

      {/* Notice Content */}
      <div className="space-y-4">
        {['Cancellation of Sports Activities', 'Cancellation of Sports Activities', 'Cancellation of Sports Activities'].map((title, index) => (
          <div key={index} className="relative">
            {/* Date Badge */}
            <div className="relative p-4 bg-white rounded-lg shadow-sm sm:shadow-none">
  {/* Date Badge */}
  <div className="absolute top-0 right-0 mt-2 mr-2 bg-white border border-[#015AB5] rounded-full text-[#015AB5] text-xs sm:text-sm px-2 py-0.5 hidden sm:block">
    19 Jun
  </div>
  {/* Notice Content */}
  <h4 className="text-lg sm:text-xl text-[#027FFF] ">{title}</h4>
  <p className="text-xs sm:text-sm mt-2 text-[#8E959C] leading-relaxed">
    Dear Students, Faculty, and Parents, Due to unforeseen circumstances, all sports activities scheduled for this week, including practices and matches, are hereby canceled. This decision has been made to ensure the safety and well-being of all participants.
  </p>
</div></div>

        ))}
      </div>
    </div>

    {/* Birthdays Card */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 font-grandis p-4 md:w-1/3 w-full h-auto relative">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-[#C8D2DC] font-medium">Birthdays</span>
          <span className="text-gray-400">Daily</span>
        </div>
        <h1 className="text-xl font-bold font-grandis text-[#6E7479]">Today</h1>

        {/* Three larger boxes inside double-height box */}
        <div className="mt-4 grid grid-cols-1 gap-4">
          {/* Larger Box 1 */}
          <div className="bg-[#014F9E] p-4 shadow-inner rounded-2xl flex-grow">
            <div className="flex justify-between items-center">
              <span className="text-white">Revenue</span>
              <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
                11:00am
              </span>
            </div>
          </div>

          {/* Larger Box 2 */}
          <div className="bg-[#F2F5F7] p-4 shadow-inner rounded-2xl flex-grow">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Expenses</span>
              <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
                11:00am
              </span>
            </div>
          </div>

          {/* Larger Box 3 */}
          <div className="bg-[#F2F5F7] p-4 shadow-inner rounded-2xl flex-grow">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Net Profit</span>
              <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
                11:00am
              </span>
            </div>
          </div>

          {/* Larger Box 4 */}
          <div className="bg-[#F2F5F7] p-4 shadow-inner rounded-2xl flex-grow">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Expenses</span>
              <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
                11:00am
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




  </div>
</div>

    </>
  );
};

export default AdminDashboard;
