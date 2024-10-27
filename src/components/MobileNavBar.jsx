import { CiGlobe } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";
import { Link } from "react-router-dom";
const MobileNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary1 rounded-full mb-3 mx-2 flex justify-around w-full text-text p-2 z-20 md:hidden">
      <Link to="/">
        <div className=" bg-primaryHover text-secondary p-1 rounded-lg cursor-pointer">
          <CiGlobe className=" size-8 text-secondary" />
        </div>
      </Link>
      <Link to="/price">
        <div className="">
          <IoTrendingUp className=" size-8 text-secondary" />
        </div>
      </Link>
      <a href="https://github.com/OlaiwonAbdullahi/Web3-Search">
        <div className="">
          <SlSocialGithub className=" size-8 text-secondary" />
        </div>
      </a>
    </div>
  );
};

export default MobileNavBar;
