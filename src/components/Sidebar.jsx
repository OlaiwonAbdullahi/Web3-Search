import { CiFolderOn, CiGlobe, CiSettings, CiUser } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="bg-primary1 w-14 h-screen flex flex-col justify-between">
      <div className="  text-text p-2 flex flex-col items-center justify-around h-1/3 ">
        <div className=" bg-primaryHover p-1 rounded-lg">
          <CiGlobe className=" size-8" />
        </div>
        <div className=" bg-primaryHover p-1 rounded-lg">
          <IoTrendingUp className=" size-8" />
        </div>
        <div className=" bg-primaryHover p-1 rounded-lg">
          <CiFolderOn className=" size-8" />
        </div>
      </div>
      <div className=" p-2 flex flex-col items-center justify-around gap-2">
        <div className="text-text">
          <CiUser className=" size-6" />
        </div>
        <div className="text-text">
          <CiSettings className=" size-6" />
        </div>
        <div className="text-text">
          <SlSocialGithub className=" size-6" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
