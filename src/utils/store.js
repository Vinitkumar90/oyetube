import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appslice"
import searchReducer from "./searchSlice"

const store = configureStore({
    reducer:{
        app:appSlice,
        search: searchReducer,
    }
})

export default store;