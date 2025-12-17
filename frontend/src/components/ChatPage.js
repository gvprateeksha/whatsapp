import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import ChatBox from './ChatBox';
import UserList from './UserList';
import { connectSocket, sendMessage, onMessage, disconnectSocket } from '../services/websocket';

function ChatPage({ user }) {
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    connectSocket(user);
    onMessage((msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => disconnectSocket();
  }, [user]);

  const addMessage = (text) => {
    const message = { text, sender: user.username, receiver: selectedUser };
    sendMessage(message);
    setMessages([...messages, message]);
  };

  return (
    <div className="chat-page">
      <UserList onSelectUser={setSelectedUser} />
      <div className="chat-container">
        {selectedUser ? (
          <>
            <h2>Chat with {selectedUser}</h2>
            <MessageList messages={messages.filter(msg => msg.receiver === selectedUser)} />
            <ChatBox onSendMessage={addMessage} />
          </>
        ) : (
          <p>Select a user to start chatting</p>
        )}
      </div>
    </div>
  );
}

export default ChatPage;
