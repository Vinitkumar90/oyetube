import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { cache, useEffect, useState } from "react";
import { SEARCH_URL } from "../utils/constants";
import { cacheSuggestions } from "../utils/searchSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.suggestionsCache);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  function handleMenu() {
    console.log("Hamburger menu clicked");
    dispatch(toggleMenu());
  }

  const suggestionkaro = async () => {
    const cached = searchCache[searchQuery];
    if (cached) {
      setSuggestions(cached);
      return;
    }

    const data = await fetch(SEARCH_URL + searchQuery);
    console.log("api call gaya");
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheSuggestions({ query: searchQuery, suggestions: json[1] }));
  };

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      suggestionkaro();
    }, 400);

    return () => {
      clearTimeout(unsubscribe);
    };
  }, [searchQuery]);

  return (
    <div className=" fixed w-screen top-0 flex items-center justify-between px-8 py-3 shadow mb-2 bg-white z-50">

      <div className="flex items-center gap-4">
        <RxHamburgerMenu className="text-neutral-800 text-2xl cursor-pointer" onClick={handleMenu} />
        <h1 className="text-4xl font-mono">oyetube</h1>
      </div>


      <div className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() =>
            setTimeout(() => {
              setShowSuggestion(false);
            }, 200)
          }
          placeholder="Search"
          className="focus:outline-none p-[7px] pl-4 rounded-l-full w-xl text-neutral-800  border-neutral-300 border-2 border-r-0"
        />
        <div className="border-2 border-neutral-300 py-3 px-6 rounded-r-full cursor-pointer">
          <FiSearch className="text-neutral-700 text-[14px]" />
        </div>
      </div>

      {showSuggestion && suggestion.length > 0 && (
        <div className="bg-slate-100 fixed top-15 left-128 rounded px-4 py-2 h-auto w-xl z-100">
          <ul>
            {suggestion.map((s, i) => (
              <li
                key={i}
                className=" rounded  hover:border-neutral-300 hover:bg-neutral-200 transition  mb-[6px] flex items-center gap-1 p-1"
              >
                <MdOutlineSearch />
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex item-center border-2 border-neutral-300 rounded py-[6px] px-2   cursor-pointer">
        <FaRegUserCircle className="text-neutral-600 text-xl" />
        <p className="text-blue-700 font-semibold text-sm ml-2">Sign In</p>
      </div>
    </div>
  );
};

export default Navbar;
