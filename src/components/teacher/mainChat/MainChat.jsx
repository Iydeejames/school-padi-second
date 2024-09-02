import { useState } from 'react';
import ChatList from './ChatList';
import ChatUsersList from './ChatUsersList';
import ChatWindow from './ChatWindow';

const MainChat = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Chats');
  const [selectedUser, setSelectedUser] = useState(null);


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedUser(null); // Reset the selected user when the category changes
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };


  return (
    <section>
     <div className="flex my-1">
            <h2 className='text-2xl py-2 text-white'>Chat Box</h2>
        </div>
    <div className="flex h-screen bg-white  border rounded-2xl  ">
   
      <ChatList onSelectCategory={handleCategorySelect} />
      <ChatUsersList category={selectedCategory} onSelectUser={handleUserSelect} />
      <ChatWindow user={selectedUser} />
    </div>
    </section>
  );
};

export default MainChat;
