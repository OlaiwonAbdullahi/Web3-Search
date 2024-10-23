import { IoIosSearch } from "react-icons/io";

const SearchInput = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="flex rounded-full mx-auto border border-black w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl bg-text justify-between p-1 items-center">
      <input
        type="text"
        placeholder=" Search the Web"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-text w-full focus:outline-none p-1 pl-2 rounded-full text-base sm:text-lg md:text-xl font-Montserrat placeholder:text-primary text-primary"
      />
      <button
        className="flex items-center justify-center p-1"
        onClick={handleSearch}
      >
        <IoIosSearch className="text-black h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
};

export default SearchInput;
