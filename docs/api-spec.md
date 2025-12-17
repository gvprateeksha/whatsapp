# API Specification

## Authentication

### Register User
- **Endpoint**: POST /api/auth/register
- **Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User object

### Login
- **Endpoint**: POST /api/auth/login
- **Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**: JWT token

## Chat

### Send Message
- **Endpoint**: POST /api/chat/send
- **Body**:
  ```json
  {
    "senderId": "string",
    "receiverId": "string",
    "content": "string"
  }
  ```
- **Response**: Message object

### Get Messages
- **Endpoint**: GET /api/chat/messages?senderId={senderId}&receiverId={receiverId}
- **Response**: Array of Message objects

## WebSocket

- **Endpoint**: /ws
- **Send Message**: /app/sendMessage
- **Subscribe**: /topic/messages