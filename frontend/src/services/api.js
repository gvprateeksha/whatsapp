import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const register = (user) => axios.post(`${API_BASE_URL}/auth/register`, user);
export const login = (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials);
export const sendMessage = (message) => axios.post(`${API_BASE_URL}/chat/send`, message);
export const getMessages = (senderId, receiverId) => axios.get(`${API_BASE_URL}/chat/messages`, { params: { senderId, receiverId } });