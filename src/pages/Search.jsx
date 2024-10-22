import SearchHeader from "../components/SearchHeader";
import cryptoImage from "../assets/crypto.svg"; // Make sure the image path is correct
import SearchInput from "../components/SearchInput";

const Search = () => {
  return (
    <div className="bg-primary h-screen opacity-95 flex flex-col gap-4 p-4">
      <div className="">
        <SearchHeader />
      </div>
      <div className="">
        <SearchInput />
      </div>
    </div>
  );
};

export default Search;
