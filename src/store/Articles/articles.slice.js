import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articlesItems: [],
    total:0,
    
}

 const articlesSlice = createSlice({
    name: 'articles',
    initialState
 })

export default articlesSlice.reducer;