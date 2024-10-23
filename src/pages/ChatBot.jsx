import MessagingInput from "../components/MessagingInput";
import MessageList from "../components/MessageList";
import React, { useState, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = (text, sender) => {
    const newMessage = { text, sender, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (sender === "User") {
      setTimeout(() => {
        sendMessage("This is an automated reply.", "Bot");
      }, 1000);
    }
  };
  return (
    <div className="bg-primary min-h-screen">
      <MessageList messages={messages} />
      <MessagingInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatBot;
