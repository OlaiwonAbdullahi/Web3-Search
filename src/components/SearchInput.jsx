import { IoIosSearch } from "react-icons/io";

const SearchInput = ({ query, setQuery, handleSearch }) => {
  return (
    <div className=" flex rounded-full mx-auto border border-black w-1/3 bg-text justify-between p-1 items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" bg-text w-full focus:outline-none p-1 pl-2 rounded-full"
      />
      <button className="" onClick={handleSearch}>
        <IoIosSearch className="text-black h-6 w-6" />
      </button>
    </div>
  );
};

export default SearchInput;
