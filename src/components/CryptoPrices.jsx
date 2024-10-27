import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const CryptoPrices = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCoins = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setCoins(data);
      setFilteredCoins(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query) ||
        coin.symbol.toLowerCase().includes(query)
    );
    setFilteredCoins(filtered);
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4">Error: {error}</div>;
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="">
        <div className="flex rounded-full mx-auto border border-black md:w-1/3 w-full bg-text justify-between p-1 items-center">
          <input
            type="text"
            placeholder="Search A Coin"
            value={searchQuery}
            onChange={handleSearch}
            className="bg-text w-full text-primary placeholder:text-primary focus:outline-none p-1 pl-2 rounded-full"
          />
          <IoIosSearch className="text-black h-6 w-6" />
        </div>
      </div>
      <div className="text-lg p-2 mx-auto flex top-0 sticky justify-between bg-primary1 text-text rounded-lg md:w-5/6 w-full">
        <span>Coin</span>
        <span>Price</span>
        <span>Volume</span>
        <span>Market Cap</span>
        <span>24h Change</span>
      </div>

      {/* Scrollable Table Wrapper */}
      <div className="mt-4 text-text w-full overflow-x-auto">
        {filteredCoins.length > 0 ? (
          <div className="flex flex-col gap-4 md:w-5/6 w-full mx-auto">
            {filteredCoins.map((coin) => (
              <div
                key={coin.id}
                className="flex items-center border-b border-dotted border-text pb-4 justify-between min-w-[600px]"
              >
                <div className="flex px-2">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-8 h-8 mr-4"
                  />
                  <span>
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </span>
                </div>
                <div>
                  <span>$ {coin.current_price.toLocaleString()}</span>
                </div>
                <div>${coin.total_volume.toLocaleString()}</div>
                <div>${coin.market_cap.toLocaleString()}</div>
                <div>
                  <p
                    className={`text-sm ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-green-400"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No coins available.</p>
        )}
      </div>
    </div>
  );
};

export default CryptoPrices;
