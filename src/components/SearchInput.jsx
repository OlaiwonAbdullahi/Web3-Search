import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className=" flex rounded-full mx-auto border border-black w-1/3 bg-text justify-between p-1 items-center">
      <input type="text" className=" bg-text w-3/4" />
      <IoIosSearch className="text-black h-6 w-6" />
    </div>
  );
};

export default SearchInput;
