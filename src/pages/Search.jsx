import { useState } from "react";
import SearchHeader from "../components/SearchHeader";
import SearchInput from "../components/SearchInput";
import SearchResult from "../components/SearchResult";
import PriceMarquee from "../components/PriceMarquee";

const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const apiKey = "AIzaSyDVczYNXbEtstDemtgc9eJF3EyZOn9Tm-E";
  const searchEngineId = "705f7f8fd90224c9d";

  const handleSearch = async () => {
    if (!query) return;

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(
      query
    )}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResult(data.items || []);
      console.log(data.items || []);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-primary h-full opacity-95 flex flex-col gap-4 p-4">
      <div className=" w-full">
        <PriceMarquee className=" w-2/3" />
      </div>
      <div className="">
        <SearchHeader>
          <span className=" text-secondary">W</span>eb3{" "}
          <span className=" text-secondary">S</span>earch
        </SearchHeader>
      </div>
      <div className="">
        <SearchInput
          setQuery={setQuery}
          query={query}
          handleSearch={handleSearch}
        />
      </div>
      <div className="bg-primary min-h-screen">
        <SearchResult result={result} />
      </div>
    </div>
  );
};

export default Search;
