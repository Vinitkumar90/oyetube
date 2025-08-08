import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        suggestionsCache:{}
    },
    reducers:{
        cacheSuggestions:(state,action) => {
            const {query, suggestions} = action.payload;
            state.suggestionsCache[query] = suggestions;
        }
    }
})

export default searchSlice.reducer;
export const {cacheSuggestions} = searchSlice.actions;