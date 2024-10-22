import { useEffect, useState } from "react";

const CryptoPrices = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setCoins(data); // Set the fetched coins data
    } catch (error) {
      setError(error.message); // Fixed typo
    } finally {
      setLoading(false); // Ensure loading is set to false
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <div className="text-lg p-2 mx-auto flex justify-around bg-primary1 text-text rounded-lg md:w-3/4 w-full">
        <span>Coin</span>
        <span>Price</span>
        <span>Volume</span>
        <span>Market Cap</span>
        <span>24h Change</span>
      </div>
      <div className="mt-4 text-text">
        {coins.length > 0 ? (
          <div className="flex flex-col gap-4 md:w-3/4 w-full mx-auto">
            {coins.map((coin) => (
              <div
                key={coin.id}
                className="flex items-center border-b border-gray-300 pb-4"
              >
                <div className=" flex px-2">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-8 h-8 mr-4"
                  />
                  <span>
                    {coin.name} {"  "}({coin.symbol.toUpperCase()})
                  </span>
                </div>
                <div className="">
                  <span>$ {coin.current_price}</span>
                </div>
                <div className="">{coin.total_volume}</div>
                <div className="">{coin.market_cap}</div>
                <div className="">{coin.market_cap_change_percentage_24h}</div>
              </div>
            ))}
          </div>
        ) : (
          <p>No coins available.</p>
        )}
      </div>
    </div>
  );
};

export default CryptoPrices;
