import  { useState } from 'react';
import ChatComponent from "../../../components/teacher/chat/ChatComponent";
import RecentChats from "../../../components/teacher/chat/RecentChats";
import ChatConversation from '../../../components/teacher/chat/ChatConversation';

export default function AiChat() {
  const [chatInput, setChatInput] = useState('');
  const [conversationStarted, setConversationStarted] = useState(false);
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = () => {
    if (chatInput.trim() !== '') {
      setConversationStarted(true);
      setConversation([...conversation, { role: 'user', text: chatInput }]);

      // Simulate a response after a short delay
      setTimeout(() => {
        setConversation(prev => [
          ...prev,
          { role: 'bot', text: "Here is the simulated response for: " + chatInput }
        ]);
      }, 1000);
      
      setChatInput(''); // Clear the input after sending
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-[#fff] relative mb-4 font-[500] text-2xl">Chat Box</h2>
      <div className="h-16 bg-white rounded-xl flex items-center p-4">
        <h2 className="text-[#014F9E] font-[600] text-2xl">Good Morning, Name</h2>
      </div>

      {!conversationStarted && (
        <ChatComponent
          chatInput={chatInput}
          setChatInput={setChatInput}
          handleSendMessage={handleSendMessage}
        />
      )}

      {conversationStarted && (
        <ChatConversation conversation={conversation} />
      )}
      
            {!conversationStarted && <RecentChats />}
      
     
      
    </div>
  );
}
