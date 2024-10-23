import { AiOutlineSend } from "react-icons/ai";

const MessagingInput = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary flex justify-center  p-2">
      <div className="flex gap-2 items-center w-2/3 border border-secondary justify-between p-1.5 rounded-lg">
        <input
          type="text"
          placeholder="Ask Anything"
          className="w-full p-1 bg-transparent text-lg"
        />
        <button className="flex items-center">
          <AiOutlineSend className="size-8 text-secondary" />
        </button>
      </div>
    </div>
  );
};

export default MessagingInput;
