import { CiGlobe } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div>
      <div className=" bg-primary1 w-14 h-screen text-text p-2 flex flex-col items-center">
        <div className=" bg-primary p-1 rounded-md">
          <CiGlobe className=" size-8" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
