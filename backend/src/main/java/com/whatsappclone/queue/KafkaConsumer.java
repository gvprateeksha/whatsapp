package com.whatsappclone.queue;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

    @KafkaListener(topics = "chat-messages", groupId = "whatsapp-group")
    public void listen(String message) {
        System.out.println("Received message: " + message);
        // Process the message
    }
}