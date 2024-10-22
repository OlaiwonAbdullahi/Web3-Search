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
      console.log(data);
    } catch (error) {
      setError(error.mesage);
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
    <div>
      <div className="text-lg p-2 mx-auto flex justify-around bg-primary1 text-text rounded-lg md:w-3/4 w-full">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>SubTotal</span>
      </div>
    </div>
  );
};

export default CryptoPrices;
