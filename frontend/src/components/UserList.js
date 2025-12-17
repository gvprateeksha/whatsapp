import React, { useState, useEffect } from 'react';

function UserList({ onSelectUser }) {
  const [users, setUsers] = useState(['Alice', 'Bob', 'Charlie']); // Mock data; replace with API

  useEffect(() => {
    // Fetch users from backend API
    // fetch('/api/users').then(res => res.json()).then(setUsers);
  }, []);

  return (
    <div className="user-list">
      <h3>Contacts</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index} onClick={() => onSelectUser(user)}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
