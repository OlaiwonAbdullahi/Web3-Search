import SearchHeader from "../components/SearchHeader";
import SearchInput from "../components/SearchInput";

const Search = () => {
  return (
    <div className="bg-primary h-screen opacity-95 flex flex-col gap-4 p-4">
      <div className="">
        <SearchHeader>
          <span className=" text-secondary">W</span>eb3{" "}
          <span className=" text-secondary">S</span>earch
        </SearchHeader>
      </div>
      <div className="">
        <SearchInput />
      </div>
    </div>
  );
};

export default Search;
