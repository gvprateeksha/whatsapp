# Architecture Overview

## System Architecture

The WhatsApp Clone is a real-time messaging application consisting of a backend and frontend.

### Backend (Spring Boot)
- **Controllers**: Handle REST API requests for authentication and chat.
- **Services**: Business logic for user management and messaging.
- **Repositories**: Data access layer for MongoDB.
- **Models**: Data entities (User, Message, Group).
- **WebSocket**: Real-time communication.
- **Kafka**: Message queuing.
- **Redis**: Caching.

### Frontend (React)
- **Components**: Reusable UI components (LoginForm, MessageList, ChatBox).
- **Pages**: Application pages (LoginPage, ChatPage).
- **Services**: API calls and WebSocket client.

### Database
- MongoDB for persistent data storage.

### Message Queue
- Kafka for asynchronous message processing.

### Cache
- Redis for session management and caching.

## Deployment
- Backend deployed as a Spring Boot application.
- Frontend served as a static site.