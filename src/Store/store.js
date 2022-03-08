import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userInfoReducer from "../users/userInfo";
import movieInfoReducer from "../users/movieInfo";

export default configureStore({
    reducer: {
        user: userInfoReducer,
        movie: movieInfoReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});