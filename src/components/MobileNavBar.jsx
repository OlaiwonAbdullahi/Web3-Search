import { CiGlobe, CiUser } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";
const MobileNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary flex justify-around w-full text-text p-2">
      <div className="">
        <CiGlobe />
      </div>
      <div className="">
        <IoTrendingUp />
      </div>
      <div className="">
        <CiUser />
      </div>
    </div>
  );
};

export default MobileNavBar;
