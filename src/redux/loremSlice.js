import { createSlice } from "@reduxjs/toolkit";

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    loading: false,
    data: null
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setLoremData: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    }
  }
});

export const { startLoading, setLoremData } = loremSlice.actions;
export default loremSlice.reducer;
