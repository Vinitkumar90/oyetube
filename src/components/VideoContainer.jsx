import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap gap-2 ">
      {videos.length > 0 &&
        videos.map((v) => (
          <Link to={`/watch?v=${v.id}`} key={v.id}>
            <VideoCard info={v}  />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
