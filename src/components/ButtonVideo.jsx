import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const ButtonVideo = () => {
  const showSidebar = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`${showSidebar ? `ml-56` : `ml-24`} mt-32`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default ButtonVideo;
