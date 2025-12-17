package com.whatsappclone.controller;

import com.whatsappclone.model.Message;
import com.whatsappclone.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/send")
    public Message sendMessage(@RequestBody Message message) {
        return chatService.sendMessage(message);
    }

    @GetMapping("/messages")
    public List<Message> getMessages(@RequestParam String senderId, @RequestParam String receiverId) {
        return chatService.getMessages(senderId, receiverId);
    }
}