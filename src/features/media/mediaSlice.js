import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Movies",
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setToMovies: (state) => {
      state.value = "Movies";
    },
    setToTheatres: (state) => {
      state.value = "In Theatres";
    },
  },
});

export const { setToTheatres, setToMovies } = mediaSlice.actions;

export default mediaSlice.reducer;
