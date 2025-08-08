import { FaHistory, FaRegUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { TbBrandYoutube } from "react-icons/tb";
import { useSelector } from 'react-redux'
import { Link } from "react-router";

const Sidebar = () => {
    const showSidebar = useSelector((store) => store.app.isMenuOpen)

 return showSidebar ? (
    <div className="fixed left-0  top-18 min-h-screen w-56 pt-4 shadow">
     
        <div className="flex items-center">
          <IoMdHome className="text-black text-2xl ml-6" />
          <p className="text-black text-sm ml-5">Home</p>
        </div>
      
      <div className="flex items-center">
        <SiYoutubeshorts className="text-black text-2xl ml-6 my-5" />
        <p className="text-black text-sm ml-5">Shorts</p>
      </div>

      <div className="flex items-center ">
        <MdSubscriptions className="text-black text-2xl ml-6" />
        <p className="text-black text-sm ml-5">Subscriptions</p>
      </div>

      <hr className="border-gray-700 my-4" />
      <div className="flex items-center">
        <TbBrandYoutube className="text-black text-2xl ml-6" />
        <p className="text-black text-sm ml-5">You</p>
      </div>
      <div className="flex items-center my-5">
        <FaHistory className="text-black text-2xl ml-6 " />
        <p className="text-black text-sm ml-5">History</p>
      </div>
      <hr className="border-gray-700 my-4" />
      
      <div className="my-5">
        <p className="text-black text-sm ml-4">
          Sign in to like videos, comment and subscribe.
        </p>
        <div className="flex w-fit item-center border-2  rounded py-[6px] px-3  cursor-pointer ml-6 my-3">
          <FaRegUserCircle className="text-neutral-600 text-xl" />
          <p className="text-blue-700 text-sm font-semibold  ml-2">Sign In</p>
        </div>
      </div>
      <hr className="border-gray-700 my-4" />
    </div>
  ) : (
    <div className="fixed left-0 top-16  min-h-screen w-fit pt-4 flex flex-col shadow">
        <div >
          <IoMdHome className="text-black text-2xl ml-10" />
          <p className="text-black text-xs text-center ml-3 pt-1">Home</p>
        </div>
      <div>
        <SiYoutubeshorts className="text-black text-2xl ml-10 mt-7" />
        <p className="text-black text-xs text-center ml-3 pt-1">Shorts</p>
      </div>
      <div>
        <MdSubscriptions className="text-black text-2xl ml-10 mt-7" />
        <p className="text-black text-xs text-center ml-4 pt-1">
          Subscriptions
        </p>
      </div>
      <div>
        <TbBrandYoutube className="text-black text-2xl ml-10 mt-7" />
        <p className="text-black text-xs text-center ml-3 pt-1">You</p>
      </div>
      <div className=" my-5">
        <FaHistory className="text-black text-2xl ml-10 mt-4" />
        <p className="text-black text-xs text-center ml-3 pt-1">History</p>
      </div>
    </div>
  );
}

export default Sidebar