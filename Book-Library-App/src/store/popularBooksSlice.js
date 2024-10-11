
import { createSlice } from "@reduxjs/toolkit";
import { popularBooks } from "../assets/utils/PopularBooks";

const popularBooksSlice = createSlice({     //this is like a box containing popular books info

    name: 'popularBooks',                   //name of slice
    initialState: {
        popular:popularBooks,               //intial state is list of Popular books imported
    },
    reducers:{}                             //empty actions for now.

})


export default popularBooksSlice.reducer;
export const selectPopularBooks = (state) => state.popularBooks.popular;     //this is the slice exported to use by other components
