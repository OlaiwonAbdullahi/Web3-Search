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
    <div className="bg-primary min-h-screen opacity-95 flex flex-col gap-6 p-4">
      {/* PriceMarquee 
      <div className="w-full mb-4">
        <PriceMarquee />
      </div>

      {/* Search Header */}
      <div className="text-center">
        <SearchHeader>
          <div className=" flex gap-2 mx-auto text-center justify-center">
            <p className="text-3xl">
              <span className="text-secondary text-4xl">W</span>eb3{" "}
            </p>
            <p className="text-3xl">
              <span className="text-secondary text-4xl">S</span>earch
            </p>
          </div>
        </SearchHeader>
      </div>

      {/* Search Input */}
      <div className="w-full flex justify-center">
        <SearchInput
          setQuery={setQuery}
          query={query}
          handleSearch={handleSearch}
        />
      </div>

      {/* Search Result */}
      <div className="w-full flex justify-center mt-6">
        <div className="w-full max-w-screen-lg">
          <SearchResult result={result} />
        </div>
      </div>
    </div>
  );
};

export default Search;
