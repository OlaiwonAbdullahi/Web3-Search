import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
  const [active, setActive] = useState("CiGlobe");

  const menuItems = [
    { icon: CiGlobe, name: "CiGlobe", to: "/" },
    { icon: IoTrendingUp, name: "IoTrendingUp", to: "/price" },
    { icon: BsStars, name: "BsStars", to: "/ai" },
  ];
  return <div>MobileNavBar</div>;
};

export default MobileNavBar;
