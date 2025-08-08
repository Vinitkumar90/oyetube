import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sideOff, toggleMenu } from "../utils/appslice";
import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";

const VideoPlayer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sideOff());
  }, []);

  const showSidebar = useSelector((store) => store.app.isMenuOpen);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className=" w-screen h-screen">
      <Sidebar />

      <div className={`${showSidebar ? `ml-56` : `ml-24`} mt-16 h-full p-2 grid grid-cols-[1.4fr_1.6fr] grid-rows-[200px 400px] gap-2 `}>

        <div className="bg-gray-200">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?si=gDrT4kuQx6QeIdZJ`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        </div>

        <div className="bg-white h-full">
          <h1>live chat</h1>
        </div>

        <div >
          <div className="border border-b-neutral-200 shadow"></div>
          <CommentsContainer/>
        </div>
        

      </div>

    </div>
  );
};

export default VideoPlayer;
