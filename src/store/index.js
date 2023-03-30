import { configureStore, combineReducers } from "@reduxjs/toolkit";

import articlesReducer from "./Articles/articles.slice";

export const store = configureStore({
    reducer: {
        article:articlesReducer,
    }
})