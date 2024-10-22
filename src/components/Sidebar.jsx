import { useState } from "react";
import { CiFolderOn, CiGlobe, CiSettings, CiUser } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";
import { Link } from "react-router-dom"; // Import Link for navigation

const Sidebar = () => {
  const [active, setActive] = useState("CiGlobe");

  const menuItems = [
    { icon: CiGlobe, name: "CiGlobe", to: "/" },
    { icon: IoTrendingUp, name: "IoTrendingUp", to: "/price" },
    { icon: CiFolderOn, name: "CiFolderOn", to: "/resources" },
  ];

  const bottomItems = [
    { icon: CiUser, name: "CiUser" },
    { icon: CiSettings, name: "CiSettings" },
    { icon: SlSocialGithub, name: "SlSocialGithub" },
  ];

  return (
    <div className="bg-primary1 w-14 h-screen flex flex-col justify-between">
      <div className="text-text p-2 flex flex-col items-center justify-around h-1/3">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.to}>
            <div
              className={`p-1 rounded-lg cursor-pointer ${
                active === item.name ? "bg-primaryHover text-secondary" : ""
              }`}
              onClick={() => setActive(item.name)}
            >
              <item.icon className="h-8 w-8" />
            </div>
          </Link>
        ))}
      </div>

      <div className="p-2 flex flex-col items-center justify-around gap-2">
        {bottomItems.map((item) => (
          <div
            key={item.name}
            className={`cursor-pointer ${
              active === item.name ? "text-secondary" : "text-text"
            }`}
            onClick={() => setActive(item.name)}
          >
            <item.icon className="h-6 w-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
