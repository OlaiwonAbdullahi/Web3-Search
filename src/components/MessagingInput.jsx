import { AiOutlineSend } from "react-icons/ai";
const MessagingInput = () => {
  return (
    <div>
      <div className=" flex items-center w-2/3 border border-secondary justify-between p-2 ro">
        <input type="text" className="" />
        <AiOutlineSend className="size-8" />
      </div>
    </div>
  );
};

export default MessagingInput;
