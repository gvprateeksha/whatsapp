import React, { useState } from 'react';
import './App.css';
import './styles/Chat.css'; // Add this line
import LoginForm from './components/LoginForm';
import ChatPage from './components/ChatPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <ChatPage user={user} />
      )}
    </div>
  );
}

export default App;