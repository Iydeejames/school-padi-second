import PropTypes from "prop-types"

export default function  ChatWindow  ({ user }) {
  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Select a user to start chatting</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b bg-white">
        <img src="https://via.placeholder.com/40" alt="avatar" className="w-10 h-10 rounded-full mr-3" />
        <h3 className="text-lg font-semibold">{user.name}</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* This is where the conversation will be rendered */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`mb-4 ${i % 2 === 0 ? '' : 'text-right'}`}>
            <div className={`inline-block p-3 rounded-lg ${i % 2 === 0 ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text...</p>
            </div>
            <span className="block text-xs text-gray-500 mt-1">{i % 2 === 0 ? '12:30 PM' : '4:59 PM'}</span>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t bg-white flex items-center">
        <input
          type="text"
          placeholder="Type here"
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
}
ChatWindow.propTypes ={
    user: PropTypes.object.isRequired, // The user object to whom the chat is happening
}