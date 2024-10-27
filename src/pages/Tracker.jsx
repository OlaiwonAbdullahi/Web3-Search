import CryptoPrices from "../components/CryptoPrices";
//import PriceMarquee from "../components/PriceMarquee";
import SearchHeader from "../components/SearchHeader";

const Tracker = () => {
  return (
    <div className=" bg-primary h-full flex flex-col gap-5 p-4">
      <div className="text-center">
        <SearchHeader>
          <div className=" flex gap-2 mx-auto text-center justify-center">
            <p className="text-3xl">
              <span className="text-secondary text-4xl">C</span>rypto{" "}
            </p>
            <p className="text-3xl">
              <span className="text-secondary text-4xl">P</span>rice
            </p>
            <p className="text-3xl">
              <span className="text-secondary text-4xl">T</span>racker
            </p>
          </div>
        </SearchHeader>
      </div>
      <div className="bg-primary min-h-screen ">
        <CryptoPrices />
      </div>
    </div>
  );
};

export default Tracker;
