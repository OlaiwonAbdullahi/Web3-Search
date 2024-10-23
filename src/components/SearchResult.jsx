import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { PiHardHatThin } from "react-icons/pi";
import { SiBinance, SiCoinbase, SiKucoin, SiWeb3Dotjs } from "react-icons/si";

const SearchResult = ({ result }) => {
  return (
    <div className="bg-primary min-h-screen w-full">
      <div className="mt-4 w-11/12 md:w-3/4 mx-auto font-Montserrat">
        {result.length > 0 ? (
          result.map((item) => (
            <div
              key={item.link}
              className="p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-2 border-b border-gray-300"
            >
              <div className="lg:basis-2/3">
                <div className="flex gap-3 items-center">
                  <div className="flex flex-col">
                    <span className="text-lg lg:text-xl text-text font-Agdasima capitalize">
                      {item.displayLink.slice(4, 20)}
                    </span>
                    <span className="text-sm">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline break-all"
                      >
                        {item.link}
                      </a>
                    </span>
                  </div>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold mt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    {item.title}
                  </a>
                </h2>

                <div className="w-full lg:w-3/4 mt-2">
                  <p className="text-text text-sm lg:text-base">
                    {item.snippet}
                  </p>
                </div>
              </div>
              {/* Optionally add an image here */}
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-center text-2xl text-text p-4">Jump In</h2>
            <div className="flex justify-center lg:justify-around gap-4 lg:gap-8 p-3 flex-wrap">
              <a href="https://web3js.readthedocs.io/en/v1.10.0/">
                <SiWeb3Dotjs className="h-10 w-10 text-secondary" />
              </a>
              <a href="https://www.binance.com/">
                <SiBinance className="h-10 w-10 text-secondary" />
              </a>
              <a href="https://www.kucoin.com/">
                <SiKucoin className="h-10 w-10 text-secondary" />
              </a>
              <a href="https://www.x.com/">
                <FaXTwitter className="h-10 w-10 text-secondary" />
              </a>
              <a href="https://www.coinbase.com/">
                <SiCoinbase className="h-10 w-10 text-secondary" />
              </a>
              <a href="https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-web3">
                <PiHardHatThin className="h-10 w-10 text-secondary" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
