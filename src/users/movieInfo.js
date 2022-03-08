import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null
}

const movieSelectionType = createSlice({
    name: "movie",
    initialState: initailState,
    reducers: {
        setMoviesType: (state,action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
});

export const {setMoviesType} = movieSelectionType.actions;

export const selectRecommendType = state => state.movie.recommend;
export const selectnewDisneyType = state => state.movie.newDisney;
export const selectOriginalType = state => state.movie.original;
export const selectTrendingType = state => state.movie.trending;

export default movieSelectionType.reducer;