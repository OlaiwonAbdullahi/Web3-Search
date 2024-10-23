import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";

const MessagingInput = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue, "User");
      setInputValue("");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary flex justify-center p-2">
      <form
        className="flex gap-2 items-center w-2/3 border border-secondary justify-between p-1.5 rounded-lg"
        onSubmit={handleSendMessage}
      >
        <input
          type="text"
          placeholder="Ask Anything"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-1 bg-transparent text-lg focus:outline-none text-text"
        />
        <button type="submit" className="flex items-center">
          <AiOutlineSend className="size-8 text-secondary" />
        </button>
      </form>
    </div>
  );
};

export default MessagingInput;
