import { createSlice } from "@reduxjs/toolkit";

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    loading: true,
    posts: [],
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setPosts: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
  },
});

export const { setLoading, setPosts } = loremSlice.actions;
export default loremSlice.reducer;
