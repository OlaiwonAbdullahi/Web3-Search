import React, { useState, useEffect } from "react";
import MessagingInput from "../components/MessagingInput";
import MessageList from "../components/MessageList";

const ChatBot = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  // Fetch AI response directly using fetch API
  const fetchBotResponse = async (userMessage) => {
    try {
      const API_KEY = "AIzaSyCkDBe45cvin-IqgDkHrSRczc7DKabRPEo";
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "AIzaSyCkDBe45cvin-IqgDkHrSRczc7DKabRPEo", // Replace with your API key
          },
          body: JSON.stringify({
            prompt: {
              text: userMessage,
            },
          }),
        }
      );

      const data = await response.json();
      console.log("Bot Response:", data);
      return data.candidates && data.candidates[0].content;
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Sorry, I couldn't generate a response.";
    }
  };

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (text, sender) => {
    const newMessage = { text, sender, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (sender === "User") {
      const botResponse = await fetchBotResponse(text); // Fetch AI response
      const botMessage = {
        text: botResponse,
        sender: "Bot",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Update with bot response
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
