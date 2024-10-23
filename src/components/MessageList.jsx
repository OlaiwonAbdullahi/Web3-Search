const MessageList = ({ messages }) => {
  return (
    <div className="message-list flex flex-col p-4 overflow-y-auto h-[calc(100vh-120px)]">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message my-2 p-2 rounded-lg ${
            message.sender === "User"
              ? "bg-primaryHover text-white self-end"
              : "bg-cyan-50 text-primary1 self-start"
          }`}
        >
          <div className="message-text">{message.text}</div>
          <div className="message-sender text-sm italic">
            - {message.sender}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
