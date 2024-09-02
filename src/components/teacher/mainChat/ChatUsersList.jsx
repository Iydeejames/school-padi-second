import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ChatUsersList  ({ onSelectUser })  {
  const [searchTerm, setSearchTerm] = useState('');
  const users = [
    { id: 1, name: 'Chelsea Hagon', lastMessage: "I'd definitely shoot any opportunities...", time: '12:30' },
    { id: 2, name: 'James Daniel', lastMessage: 'Can we reschedule our meeting?', time: '11:00' },
    // Add more mock users here
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-1/4 bg-white border-r p-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 mb-4 border rounded-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <h2 className="text-lg font-semibold mb-4">{category}</h2> */}
      <div className="overflow-y-auto">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="flex items-center py-3 border-b cursor-pointer"
            onClick={() => onSelectUser(user)}
          >
            <img src="https://via.placeholder.com/40" alt="avatar" className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1">
              <p className="font-[500]">{user.name}</p>
              <p className="text-sm text-[#C8D2DC]">{user.lastMessage}</p>
            </div>
            <span className="text-xs text-gray-400">{user.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

ChatUsersList.propTypes = {
  onSelectUser: PropTypes.func.isRequired,
}