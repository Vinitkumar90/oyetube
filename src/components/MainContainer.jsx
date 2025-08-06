import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const MainContainer = () => {
  return (
    <div className='flex'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainContainer