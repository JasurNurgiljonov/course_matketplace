import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newCourse: null,
    bestseller: null,
    trending: null,
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newCourse = action.payload.newCourse;
            state.bestseller = action.payload.bestseller;
            state.trending = action.payload.trending;
        },
    },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewCourse = (state) => state.movie.newCourse;
export const selectBestseller = (state) => state.movie.bestseller;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;