import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

// src/components/SearchResult.js
const SearchResult = ({ result }) => {
  return (
    <div className="mt-4 bg-primary h-full w-3/4 mx-auto font-Montserrat">
      {result.length > 0 ? (
        result.map((item) => (
          <div
            key={item.link}
            className="p-4 flex justify-between items-center gap-2"
          >
            <div className="basis-2/3">
              <div className=" flex gap-3 items-center">
                <div className=" flex flex-col">
                  <span className=" text-xl text-text font-Agdasima capitalize">
                    {item.displayLink.slice(4, 20)}
                  </span>
                  <span className=" text-sm">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:underline"
                    >
                      {item.link}
                    </a>
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-bold">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  {item.title}
                </a>
              </h2>

              <div className=" w-3/4">
                <p className="text-text text-sm">{item.snippet}</p>
              </div>
            </div>
            <div className=" flex items-center justify-center basis-1/3">
              <img
                src={item.pagemap.cse_image[0].src}
                alt=""
                className=" h-20 w-20 rounded-md"
              />
            </div>
          </div>
        ))
      ) : (
        <div className="">
          <div className="">
            <FiGithub className="size-10 text-secondary" />
            <FaXTwitter className="size-10 text-secondary" />
            <FaFacebookF className="size-10 text-secondary" />
            <CiInstagram className="size-10 text-secondary" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
