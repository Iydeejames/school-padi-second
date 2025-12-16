import PropTypes from "prop-types"

export default function EventItem  ({ avatar, title, description, time, isActive, onClick }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer ${
        isActive ? 'bg-blue-900 text-white' : 'bg-gray-100'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-[#fff] flex items-center justify-center text-gray-600 font-bold">
          {avatar}
        </div>
        <div>
          <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h3>
          <p className={`text-sm ${isActive ? 'text-blue-100' : 'text-blue-500'}`}>
            {description}
          </p>
        </div>
      </div>
      <div
        className={`px-3 py-1 rounded-full text-sm ${
          isActive ? 'bg-white text-blue-900' : 'bg-white text-gray-600'
        }`}
      >
        {time}
      </div>
    </div>
  );
}
EventItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

