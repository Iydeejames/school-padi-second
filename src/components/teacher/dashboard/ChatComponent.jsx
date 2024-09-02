import { useState } from 'react';
import PropTypes from 'prop-types';

const ChatTabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer ${activeTab === tab.name ? 'text-blue-500' : 'text-gray-400'} font-normal flex items-center`}
          onClick={() => onTabClick(tab.name)}
        >
          {tab.name}
          {tab.count > 0 && (
            <span
              className={`ml-2 text-xs rounded-full bg-blue-100 text-blue-500 px-2 py-0.5`}
            >
              {tab.count}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

ChatTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

const ChatItem = ({ avatar, name, message, time, unreadCount, isTyping }) => {
  return (
    <div className="flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
        <div className="ml-4">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-400 text-sm">{isTyping ? 'is typing...' : message}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xs text-gray-400">{time}</span>
        {unreadCount > 0 && (
          <span
            className="mt-1 text-xs bg-blue-500 text-white rounded-full px-2 py-0.5"
          >
            {unreadCount}
          </span>
        )}
      </div>
    </div>
  );
};

ChatItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  unreadCount: PropTypes.number,
  isTyping: PropTypes.bool,
};

ChatItem.defaultProps = {
  unreadCount: 0,
  isTyping: false,
};

const ChatList = ({ chats, activeTab }) => {
  return (
    <div>
      {chats
        .filter(chat => activeTab === 'All Chats' || chat.tab === activeTab)
        .map((chat, index) => (
          <ChatItem
            key={index}
            avatar={chat.avatar}
            name={chat.name}
            message={chat.message}
            time={chat.time}
            unreadCount={chat.unreadCount}
            isTyping={chat.isTyping}
          />
        ))}
    </div>
  );
};

ChatList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    unreadCount: PropTypes.number,
    isTyping: PropTypes.bool,
    tab: PropTypes.string.isRequired,
  })).isRequired,
  activeTab: PropTypes.string.isRequired,
};

const ChatComponent = () => {
  const [activeTab, setActiveTab] = useState('All Chats');

  const tabs = [
    { name: 'All Chats', count: 3 },
    { name: 'Group Chats', count: 6 },
    { name: 'Private Chats', count: 8 },
  ];

  const chats = [
    {
      avatar: '/avatar1.png',
      name: 'Chelsea Hagon',
      message: "I'd definitely shoot any opportunities I ....",
      time: '12:30',
      unreadCount: 10,
      isTyping: false,
      tab: 'All Chats',
    },
    {
      avatar: '/avatar1.png',
      name: 'Chelsea Hagon',
      message: "I'd definitely shoot any opportunities I ....",
      time: '12:30',
      unreadCount: 0,
      isTyping: false,
      tab: 'Group Chats',
    },
    {
      avatar: '/avatar1.png',
      name: 'Chelsea Hagon',
      message: 'is typing...',
      time: '12:30',
      unreadCount: 0,
      isTyping: true,
      tab: 'Private Chats',
    },
    // Add more chat items as needed
  ];

  return (
    <div className="w-full max-w-md bg-white border shadow-lg rounded-lg p-4">
      <ChatTabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      <ChatList chats={chats} activeTab={activeTab} />
    </div>
  );
};

export default ChatComponent;
