import io from 'socket.io-client';

const socket = io('http://localhost:8080'); // Adjust to backend URL

export const connectSocket = (user) => {
  socket.emit('join', user.username);
};

export const sendMessage = (message) => {
  socket.emit('sendMessage', message);
};

export const onMessage = (callback) => {
  socket.on('receiveMessage', callback);
};

export const disconnectSocket = () => {
  socket.disconnect();
};

export default socket;