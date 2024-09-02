<div className="p-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 py-2 sm:p-4 sm:px-12 lg:px-24">
{/* Cards Container */}
<div className="flex space-x-2 sm:space-x-4 justify-center">
  {/* Usage Stats Card */}
  <div className="flex border rounded-lg p-1 sm:p-2 group hover:bg-sky-100 hover:border-blue-500 hover:cursor-pointer transition-all duration-300">
    <Link to="/usage-stats" className="flex items-center text-[#8E959C] text-[10px] sm:text-md gap-x-1 group-hover:text-blue-500">
      <div className="flex items-center bg-white rounded-full text-[#D3DBE3] text-[12px] sm:text-xl p-1 sm:p-2 px-2 sm:px-3 group-hover:bg-sky-100 group-hover:text-blue-500">
        <IoEye /> {/* Eye icon */}
      </div>
      <span className="text-[#D3DBE3] text-[10px] sm:text-base group-hover:text-blue-500">Usage Stats</span>
    </Link>
  </div>

  {/* SMS Logs Card */}
  <div className="flex border rounded-lg p-1 sm:p-2 group hover:bg-sky-100 hover:border-blue-500 hover:cursor-pointer transition-all duration-300">
    <Link to="/sms-logs" className="flex items-center text-[#8E959C] text-[10px] sm:text-md gap-x-1 group-hover:text-blue-500">
      <div className="flex items-center bg-white rounded-full text-[#D3DBE3] text-[12px] sm:text-xl p-1 sm:p-2 px-2 sm:px-3 group-hover:bg-sky-100 group-hover:text-blue-500">
        <IoChatbubbles /> {/* Chat bubbles icon */}
      </div>
      <span className="text-[#D3DBE3] text-[10px] sm:text-base group-hover:text-blue-500">SMS Logs</span>
    </Link>
  </div>

  {/* SMS Credit Logs Card */}
  <div className="flex border rounded-lg p-1 sm:p-2 group hover:bg-sky-100 hover:border-blue-500 hover:cursor-pointer transition-all duration-300">
    <Link to="/sms-credit-logs" className="flex items-center text-[#8E959C] text-[10px] sm:text-md gap-x-1 group-hover:text-blue-500">
      <div className="flex items-center bg-white rounded-full text-[#D3DBE3] text-[12px] sm:text-xl p-1 sm:p-2 px-2 sm:px-3 group-hover:bg-sky-100 group-hover:text-blue-500">
        <IoMenu /> {/* Hamburger menu icon */}
      </div>
      <span className="text-[#D3DBE3] text-[10px] sm:text-base group-hover:text-blue-500">SMS Credit Logs</span>
    </Link>
  </div>
</div>
</div>