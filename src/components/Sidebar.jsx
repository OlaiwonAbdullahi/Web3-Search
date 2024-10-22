import { CiFolderOn, CiGlobe } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <div className=" bg-primary1 w-14 h-screen text-text p-2 flex flex-col items-center">
        <div className=" bg-primaryHover p-1 rounded-lg">
          <CiGlobe className=" size-8" />
        </div>
        <div className=" bg-primaryHover p-1 rounded-lg">
          <IoTrendingUp className=" size-8" />
        </div>
        <div className=" bg-primaryHover p-1 rounded-lg">
          <CiFolderOn className=" size-8" />
        </div>
        <div className=" bg-primaryHover p-1 rounded-lg">
          <CiGlobe className=" size-8" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
