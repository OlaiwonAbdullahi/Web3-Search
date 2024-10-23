import CryptoPrices from "../components/CryptoPrices";
//import PriceMarquee from "../components/PriceMarquee";
import SearchHeader from "../components/SearchHeader";

const Tracker = () => {
  return (
    <div className=" bg-primary h-full flex flex-col gap-5 p-4">
      <div className="">
        <SearchHeader>
          <span className=" text-secondary">C</span>rypto{" "}
          <span className=" text-secondary">P</span>rice{" "}
          <span className=" text-secondary">T</span>racker
        </SearchHeader>
      </div>
      <div className="bg-primary min-h-screen ">
        <CryptoPrices />
      </div>
    </div>
  );
};

export default Tracker;
