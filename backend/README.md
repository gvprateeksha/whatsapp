# WhatsApp Clone Backend

This is the backend for the WhatsApp Clone application, built with Spring Boot.

## Features

- User authentication and registration
- Real-time messaging with WebSocket
- Message persistence with MongoDB
- Message queuing with Kafka
- Caching with Redis

## Prerequisites

- Java 17
- Maven
- MongoDB
- Redis
- Kafka

## Running the Application

1. Start MongoDB, Redis, and Kafka.
2. Run `mvn spring-boot:run`

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- POST /api/chat/send
- GET /api/chat/messages