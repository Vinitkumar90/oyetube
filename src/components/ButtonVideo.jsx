import React from 'react'
import { useSelector } from 'react-redux'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const ButtonVideo = () => {
    const showSidebar = useSelector((store) => store.app.isMenuOpen)
  return (
    
    <div className={`fixed ${showSidebar ? `left-56`:`left-22`} top-17  bg-pink-300 w-full h-full`}>
        this is button and video container
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default ButtonVideo