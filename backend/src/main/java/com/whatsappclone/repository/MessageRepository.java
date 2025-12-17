package com.whatsappclone.repository;

import com.whatsappclone.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findBySenderIdAndReceiverIdOrderByTimestamp(String senderId, String receiverId);
}