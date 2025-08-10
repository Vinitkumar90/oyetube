import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appslice"
import searchReducer from "./searchSlice"
import chatReducer from "./chatSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        search: searchReducer,
        chat: chatReducer
    }
})

export default store;