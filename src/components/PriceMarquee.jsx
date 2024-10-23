import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const PriceMarquee = () => {
  const [prices, setPrices] = useState([]); // Initialize state to hold prices

  const fetchPrices = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );
      const data = await res.json();
      console.log(data);
      setPrices(data); // Set state to the fetched price data (data is already in the correct format)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div className=" w-full flex justify-center">
      <div className="text-secondary w-[900px]">
        <Marquee>
          {prices.length > 0 &&
            prices.map((item) => (
              <div key={item.id} className="mx-4">
                {item.symbol.toUpperCase()} :{" "}
                {item.current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PriceMarquee;
