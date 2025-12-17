import React, { useState } from 'react';
import MessageList from '../components/MessageList';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: 'You', content: message }]);
  };

  return (
    <div>
      <h2>Chat</h2>
      <MessageList messages={messages} />
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;