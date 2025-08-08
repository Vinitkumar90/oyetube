import React from 'react'
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainContainer from './components/MainContainer';
import HomeMain from './components/HomeMain';
import VideoPlayer from './components/VideoPlayer';
import { Provider } from 'react-redux';
import store from "./utils/store"

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainContainer/>,
    children : [
      {
        path:"/",
        element:<HomeMain/>
      }, 
      {
        path:"/watch",
        element:<VideoPlayer/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Navbar/>
      <RouterProvider router={appRouter} />
    </Provider>
    </>
  )
}

export default App