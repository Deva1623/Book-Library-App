

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice.js";
import popularBookReducer from "./popularBooksSlice.js";




export const myStore = configureStore({      // creating big store and it handling 2 infos
    reducer: {
        books: bookReducer,                    //it stores all books
        popularBooks: popularBookReducer,      // it store popular books
    },

})

