import { RxHamburgerMenu } from "react-icons/rx";
import ytLogo from "../Assets/yt-logo-dark.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appslice";

const Navbar = () => {
    const dispatch = useDispatch();

    function handleMenu(){
        dispatch(toggleMenu())
    }
  return (
    <div className=" fixed w-screen top-0 flex bg-stone-200 items-center justify-between px-8 py-3">

      <div className="flex items-center" onClick={handleMenu}>
          <RxHamburgerMenu
            className="text-neutral-800 text-2xl"
          />
        <h1 className="px-2 text-4xl mx-2 font-mono font-semibold">Utube</h1>
      </div>

 
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none p-[7px] pl-4 rounded-l-full w-xl text-neutral-800  border-neutral-700 border-3"
          />
          <div className="border-2 border-neutral-700 py-3 px-6 rounded-r-full cursor-pointer">
            <FiSearch className="text-neutral-700 text-md" />
          </div>
        </div>
    
      <div className="flex item-center border-2 border-neutral-800 rounded-full py-[6px] px-2 bg-green-300  cursor-pointer">
        <FaRegUserCircle className="text-neutral-600 text-xl" />
        <p className="text-blue-700 font-semibold text-sm ml-2">Sign In</p>
      </div>

    </div>
  );
};

export default Navbar;
