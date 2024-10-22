import SearchHeader from "../components/SearchHeader";

const Tracker = () => {
  return (
    <div className=" bg-primary h-screen">
      <div className="">
        <SearchHeader>
          <span className=" text-secondary">C</span>rypto{" "}
          <span className=" text-secondary">P</span>rice{" "}
          <span className=" text-secondary">T</span>racker
        </SearchHeader>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Tracker;
