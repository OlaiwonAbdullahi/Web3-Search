import { CiGlobe, CiUser } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";
const MobileNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary flex justify-around w-full text-text p-2 z-20 md:hidden">
      <div className=" bg-primaryHover text-secondary p-1 rounded-lg cursor-pointer">
        <CiGlobe className=" size-8 text-secondary" />
      </div>
      <div className="">
        <IoTrendingUp className=" size-8 text-secondary" />
      </div>
      <div className="">
        <CiUser className=" size-8 text-secondary" />
      </div>
    </div>
  );
};

export default MobileNavBar;
