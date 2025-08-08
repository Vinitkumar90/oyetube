import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen : true,
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        sideOff: (state) => {
            state.isMenuOpen = false;
        }
    }
})

export default appSlice.reducer;
export const {toggleMenu,sideOff}  = appSlice.actions