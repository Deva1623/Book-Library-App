
import {createSlice} from "@reduxjs/toolkit";
import { AllBooks} from "../assets/utils/AllBooks";

//this is slice
const bookSlice = createSlice( {

    name: 'books',
    initialState: {
    allBooks: AllBooks,   
    },

    reducers:{
        addBook: (state, action)=>{
            state.allBooks.push(action.payload);
        },
    }

    

}
)

export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;