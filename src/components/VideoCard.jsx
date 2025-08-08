import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { title, thumbnails, channelTitle } = info.snippet;
  const { medium } = thumbnails;
  const { viewCount } = info.statistics;

  const showSidebar = useSelector((store) => store.app.isMenuOpen)

  return (
      <div className={`${showSidebar ? "w-[295px]" : "w-[330px]"}  shadow p-2 rounded-md ml-3 mb-2 border border-neutral-100`}>
        <div>
          <img src={medium.url} className="w-full rounded-md" />
        </div>
        <ul>
          <li className="truncate text-md text-stone-900">{title}</li>
          <li className="text-sm text-stone-800 mb-0.5">{channelTitle}</li>
          <li className="text-sm text-stone-700">{viewCount} views</li>
        </ul>
      </div>

  );
};

export default VideoCard;
